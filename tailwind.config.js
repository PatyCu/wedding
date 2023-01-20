/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        travel: "url('../img/travel-background.png')",
      },
      opacity: {
        10: "0.1",
        85: "0.85",
        95: "0.95",
      },
    },
    colors: {
      gray: "#d6d0c1",
      black: "#0d0900",
      white: "#fcfcfa",
      gold: "#e6aa12",
      "light-gold": "#faf2de",
    },
  },
  //plugins: [require("@tailwindcss/forms")],
};
