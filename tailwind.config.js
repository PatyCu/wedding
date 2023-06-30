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
        gold: "#C48300",
        lightgold: "#eddfaf",
        alternategold: "#d4af37",
      },
      backgroundImage: {
        "travel-background": "url('./img/travel-background.png')",
        "party-lights-background": "url('./img/party_lights.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
