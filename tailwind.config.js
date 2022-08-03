/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./pages/**/*.tsx", "./pkg/**/*.tsx", "./lib/**/*.tsx"],
  mode: "jit",
  // purge: ["./index.html", "./pages/**/*.tsx", "./pkg/**/*.tsx", "./lib/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
