import { useState } from "react";
import { Link } from "react-router-dom";

const MenuList = ({ items, closeMenu, level = 0 }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul style={{ paddingLeft: `${level * 16}px` }}>
      {items.map((item, index) => (
        <li key={index}>
          {item.dropdown && item.dropdown.length > 0 ? (
            <>
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full flex justify-between items-center py-2 ${
                  level === 0 ? "text-subtitle border-b" : "text-paragraph"
                }`}
              >
                {item.title}
                <i
                  className={`ri-arrow-${
                    openIndex === index ? "up" : "down"
                  }-s-line text-subtitle`}
                />
              </button>

              {openIndex === index && (
                <MenuList
                  items={item.dropdown}
                  closeMenu={closeMenu}
                  level={level + 1}
                />
              )}
            </>
          ) : item.external ? (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`block py-2 ${
                level === 0 ? "text-subtitle border-b" : "text-paragraph"
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </a>
          ) : (
            <Link
              to={item.path}
              className={`block py-2 ${
                level === 0 ? "text-subtitle border-b" : "text-paragraph"
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const HeaderMobile = ({ isOpen, data, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="xl:hidden fixed top-0 left-0 w-full h-screen bg-[var(--background_sidebar)] z-40 px-5 py-20 md:py-30 overflow-y-auto">
      <MenuList items={data} closeMenu={closeMenu} />
    </div>
  );
};

export default HeaderMobile;
