/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#854ce6",
        primaryOverlay: "#231e36",

        surface: {
          1: "#1c1c27",
          2: "#191924",
          elevated: "#232332",
          card: "#171721",
          footer: "#1c1c27",
          border: "#2c2640",
        },
        text: {
          primary: "#f2f3f4",
          secondary: "#f2f3f495",
          muted: "#626970",
          subtle: "#575c66",
        },
        white: "#ffffff",
      },
      screens: {
        sm: "640px",
        desktop: "1024px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
