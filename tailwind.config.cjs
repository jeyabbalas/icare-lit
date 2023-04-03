/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./plots/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
