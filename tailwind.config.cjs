/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-image":"url('/src/assets/Shiny Overlay (1).svg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
