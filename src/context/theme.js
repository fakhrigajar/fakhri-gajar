import { createContext, useContext } from "react";

const STORAGE_KEY = "theme";

// Keep in sync with --color-surface-2 and the bootstrap script in index.html.
const THEME_COLORS = {
  dark: "#0a0a09",
  light: "#fcfbf7",
};

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function getInitialTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}
