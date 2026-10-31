import { useTheme } from "../../context/theme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = `Switch to ${isDark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="icon-btn relative overflow-hidden text-text-primary"
    >
      <i
        aria-hidden="true"
        className={`ri-sun-line absolute transition-all duration-500 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      ></i>
      <i
        aria-hidden="true"
        className={`ri-moon-clear-line absolute transition-all duration-500 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      ></i>
    </button>
  );
}

export default ThemeToggle;
