import { useLocation, useNavigate } from "react-router-dom";
import { navigateOrScrollTo } from "./navigationHelper";

const DropDownHeader = ({
  item,
  index,
  isOpen,
  setOpenDropdownIndex,
  onMenuClick,
}) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;
  const location = useLocation();
  const navigate = useNavigate();

  // Handle klik menu utama
  const handleMainClick = (e) => {
    e.preventDefault();

    if (hasDropdown) {
      setOpenDropdownIndex(isOpen ? null : index);
    } else {
      navigateOrScrollTo(item.path, location.pathname, navigate);
      onMenuClick?.();
    }
  };

  const handleSubClick = (path) => {
    navigateOrScrollTo(path, location.pathname, navigate);
    setOpenDropdownIndex(null);
    onMenuClick?.();
  };

  // Recursive render untuk submenu
  const renderDropdown = (dropdownItems) => (
    <ul className="absolute top-full left-0 bg-[var(--background_sidebar)] shadow-md rounded-md z-50 min-w-[180px]">
      {dropdownItems.map((subItem, i) => {
        const subHasDropdown = subItem.dropdown && subItem.dropdown.length > 0;

        return (
          <li
            key={i}
            className="relative group px-4 py-3 hover:bg-[var(--background_header)] whitespace-nowrap cursor-pointer"
          >
            <div
              className="flex items-center justify-between"
              onClick={() => {
                if (subItem.external) {
                  window.open(subItem.path, "_blank", "noopener,noreferrer");
                } else if (!subHasDropdown) {
                  handleSubClick(subItem.path);
                }
              }}
            >
              <span>{subItem.title}</span>
              {subHasDropdown && (
                <i className="ri-arrow-right-s-line text-sm"></i>
              )}
            </div>

            {/* Sub-dropdown (level 2, 3, dst) */}
            {subHasDropdown && (
              <div className="absolute left-full top-0 hidden group-hover:block z-50 min-w-full">
                {renderDropdown(subItem.dropdown)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="relative dropdown-container">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={handleMainClick}
      >
        <span>{item.title}</span>
        {hasDropdown && <i className="ri-arrow-down-s-line text-sm"></i>}
      </div>

      {/* Render dropdown recursive */}
      {hasDropdown && isOpen && renderDropdown(item.dropdown)}
    </div>
  );
};

export default DropDownHeader;
