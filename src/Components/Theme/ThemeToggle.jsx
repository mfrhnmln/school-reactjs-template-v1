const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div className="relative inline-block">
      <select
        id="theme"
        name="theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        autoComplete="off"
        className="appearance-none btn-dropdownicon focus:outline-none focus:ring-0 w-full mr-5"
        style={{
          backgroundColor: "var(--background_button)",
          color: "var(--color_text_button)",
          border: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
      >
        <option value="light">LightMode ☀️</option>
        <option value="dark">DarkMode 🌙</option>
      </select>

      <i className="text-button ri-arrow-down-s-line absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"></i>
    </div>
  );
};

export default ThemeToggle;
