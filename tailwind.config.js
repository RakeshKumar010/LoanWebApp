/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navColor: "#00072c",
        logoColor: "#50cfa2",
        themeColor1: "#1d2f41",
        themeColor2: "#ff494a",
        themeColor3: "#4476a8",
        themeColor4: "#ecf0f4",
        themeBlack: "#222429",
        textColor: "#73787d",
      },
      fontFamily: {
        text: ["Roboto", "sans-serif"],
        title: ["Roboto", "sans-serif"],
        style: ["Reey"],
      },
      fontSize: {
        h1: ["90px", { lineHeight: "1em" }],
        h2: ["45px", { lineHeight: "1.2em" }],
        h3: ["36px", { lineHeight: "1.2em" }],
        h4: ["24px", { lineHeight: "1.4em" }],
        h5: ["20px", { lineHeight: "1.4em" }],
        h6: ["18px", { lineHeight: "1.4em" }],
      },
    },
  },
  plugins: [],
};
