import { useLocation, useNavigate } from "react-router-dom";

const Logo = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Tentukan logo berdasarkan theme
  const logoSrc =
    theme === "dark"
      ? "logo-header-light.png"
      : "logo-header-light.png";

  return (
    <a href="/" onClick={handleLogoClick} className="block">
      <img
        className="max-w-50 md:max-w-60 max-h-15"
        src={logoSrc}
        alt={`Logo Sekolah ${theme === "dark" ? "Dark" : "Light"}`}
      />
    </a>
  );
};

export default Logo;
