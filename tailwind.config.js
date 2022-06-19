const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCFCFC",
        secondary: "#93979D",
        "text-hover": "#F7C775",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
