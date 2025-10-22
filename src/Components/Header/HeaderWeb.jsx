import DropDownHeader from "./DropDownHeader";

const HeaderWeb = ({ 
  data, 
  openDropdownIndex, 
  setOpenDropdownIndex, 
  closeMenu,
  
}) => {
  return (
    <div className="hidden lg:flex items-center justify-end gap-6 font-semibold text-paragraph w-full">
      {/* Menu Dropdown */}
      {data.map((item, index) => (
        <DropDownHeader
          key={index}
          item={item}
          index={index}
          isOpen={openDropdownIndex === index}
          setOpenDropdownIndex={setOpenDropdownIndex}
          onMenuClick={closeMenu}
        />
      ))}

      
    </div>
  );
};

export default HeaderWeb;
