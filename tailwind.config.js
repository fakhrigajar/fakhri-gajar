import defaultTheme from "tailwindcss/defaultTheme";

// Colors resolve to CSS variables (see src/assets/styles/tailwind.css) so they
// switch with the theme and still support opacity modifiers like bg-primary/10.
const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: withAlpha("--color-primary"),
        primaryOverlay: withAlpha("--color-primary-overlay"),
        accent: withAlpha("--color-accent"),
        tertiary: withAlpha("--color-tertiary"),
        gold: withAlpha("--color-gold"),
        tangerine: withAlpha("--color-tangerine"),
        // Text on the gold/orange brand gradient.
        onBrand: "#1c1400",

        surface: {
          1: withAlpha("--color-surface-1"),
          2: withAlpha("--color-surface-2"),
          elevated: withAlpha("--color-surface-elevated"),
          card: withAlpha("--color-surface-card"),
          footer: withAlpha("--color-surface-1"),
          border: withAlpha("--color-surface-border"),
        },
        text: {
          primary: withAlpha("--color-text-primary"),
          secondary: withAlpha("--color-text-secondary"),
          muted: withAlpha("--color-text-muted"),
          subtle: withAlpha("--color-text-subtle"),
        },
        white: "#ffffff",
      },
      screens: {
        sm: "640px",
        desktop: "1024px",
        tall: { raw: "(min-height: 800px)" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        brand: "linear-gradient(120deg, rgb(var(--color-gold)) 0%, rgb(var(--color-tangerine)) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--color-shadow) / 0.06), 0 16px 40px -20px rgb(var(--color-shadow) / 0.28)",
        glow: "0 0 0 1px rgb(var(--color-tangerine) / 0.15), 0 22px 50px -22px rgb(var(--color-tangerine) / 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-wheel": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 7s ease-in-out infinite",
        "spin-slow": "spin 16s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scroll-wheel": "scroll-wheel 1.6s ease-in-out infinite",
        draw: "draw 1.8s ease-out 1.1s forwards",
      },
    },
  },
  plugins: [],
};
