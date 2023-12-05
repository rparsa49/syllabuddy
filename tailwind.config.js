/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#0d0803",
        background: "#fdfaf7",
        primary: "#205497",
        secondary: "#c3c0f2",
        accent: "#28b3bd",

        newbg: "#E5EAFF",
        newtext: "#0D0D2F",
        newprim: "#35B7C4",
        newsecond: "#309DA6",
        newacc: "#5C0081",
      },
    },
  },
  plugins: [require("daisyui")],
  variants: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#35B7C4",
          "secondary": "#309DA6",
          "accent": "#5C0081",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};

          // "primary": "#1ddaed",
          // "secondary": "#309DA6",
          // "accent": "#1fb2a6",
          // "neutral": "#2a323c",
          // "base-100": "#1d232a",
          // "info": "#3abff8",
          // "success": "#36d399",
          // "warning": "#fbbd23",
          // "error": "#f87272",