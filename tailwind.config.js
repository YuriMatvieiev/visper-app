/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      red: "#FE4134",
      gray: "#EDEDED",
      white: "#fff",
      "dark-bg": "#1D1D1D",
      "dark-gray": "#3D3D3D",
      "button-gray-text": "#B6B6B6",
    },
    boxShadow: {
      desktop: "0px 4px 24px 0px rgba(0, 0, 0, 0.06)",
      mobile: "0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
    },
  },

  plugins: [],
};
