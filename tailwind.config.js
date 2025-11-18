// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//     "./src/**/*.{js,jsx}",
//     "./node_modules/@heroui/theme/dist/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const heroui = require("./src/app/hero"); // import your hero.js plugin

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui], // add HeroUI plugin here
};
