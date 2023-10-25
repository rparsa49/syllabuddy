/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#0d0803",
        background: "#fdfaf7",
        primary: "#205497",
        secondary: "#c3c0f2",
        accent: "#28b3bd",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "##000000",
          background: "#fdfaf7",
          primary: "#205497",
          secondary: "#c3c0f2",
          accent: "#28b3bd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

