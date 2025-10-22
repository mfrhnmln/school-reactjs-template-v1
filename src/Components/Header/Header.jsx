import { useEffect, useState } from "react";
import HeaderWeb from "./HeaderWeb";
import HeaderMobile from "./HeaderMobile";
import Logo from "./logo";
import DataHeader from "./DataHeader";

const Header = () => {
  const [scrolled, setScrolled] = useState(false); 
  const [isOpen, setIsOpen] = useState(false); 
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); 
  const [theme] = useState(() => {
    // Ambil theme awal dari localStorage → kalau tidak ada cek OS
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // Sinkronkan perubahan theme → update <html data-theme>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Shadow saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll body saat mobile menu aktif
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Klik di luar dropdown untuk menutup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between p-5 xl:px-20 transition-colors duration-300 ${
          scrolled ? "bg-[var(--background_header)]" : "bg-transparent"
        }`}
      >
        {/* Logo → sekarang ada theme */}
        <Logo theme={theme} />

        {/* hamburger menu (mobile menu) */}
        <button
          className="lg:hidden z-50 flex flex-col justify-between w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full bg-[var(--color_text_header)] transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-[var(--color_text_header)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-[var(--color_text_header)] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-full items-center justify-end gap-6">
          <HeaderWeb
            data={DataHeader}
            openDropdownIndex={openDropdownIndex}
            setOpenDropdownIndex={setOpenDropdownIndex}
            closeMenu={() => setIsOpen(false)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <HeaderMobile
        isOpen={isOpen}
        data={DataHeader}
        closeMenu={() => setIsOpen(false)}
      />
    </header>
  );
};

export default Header;
