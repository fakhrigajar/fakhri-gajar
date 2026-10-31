import { theme as antdTheme } from "antd";

const sharedToken = {
  borderRadius: 12,
  fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
};

// antd derives its palette in JS, so these mirror the CSS variables in tailwind.css.
export const antdThemes = {
  dark: {
    algorithm: antdTheme.darkAlgorithm,
    token: {
      ...sharedToken,
      colorPrimary: "#fccf0a",
      colorBgContainer: "#151411",
      colorBgElevated: "#1e1c18",
      colorBorderSecondary: "#2e2b25",
    },
  },
  light: {
    algorithm: antdTheme.defaultAlgorithm,
    token: {
      ...sharedToken,
      colorPrimary: "#b45309",
      colorBgContainer: "#ffffff",
      colorBgElevated: "#ffffff",
      colorBorderSecondary: "#eae4d6",
    },
  },
};
