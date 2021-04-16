const { resolve } = require("path")

module.exports = {
  darkMode: "class",
  purge: {
    content: [resolve("./src/content/**/*")],
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      colors: {
        'lime': '#00FF00',
      }
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
}
