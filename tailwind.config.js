/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        gray: "#d6d0c1",
        cobalt: "#002456",
        black: "#0d0900",
        white: "#fcfcfa",
        gold: "#d4af37",
        lightgold: "#eddfaf",
        "light-gold": "#eddfaf",
      },
      backgroundImage: {
        "travel-background": "url('./img/travel-background.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
