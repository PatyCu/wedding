/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        gray: "#d6d0c1",
        black: "#0d0900",
        white: "#fcfcfa",
        gold: "#e6aa12",
        "light-gold": "#faf2de",
      },
      backgroundImage: {
        "travel-background": "url('./img/travel-background.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
