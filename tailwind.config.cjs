/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      alt: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        main: "rgba(38,35,53,255)",
        opac: "rgba(38, 35, 53, 4)",
        font: "rgba(199,37,225,255)",
        darkFont: "rgba(199,37,225,255)",
        modal: "rgba(24,23,34,255)",
      },
    },
  },
  plugins: [],
};
