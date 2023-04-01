/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "footer-main": "#424E4C",
        "footer-dark": "#303d3a"
      }
    },
  },
  plugins: [],
}