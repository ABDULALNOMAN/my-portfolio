/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-image":"url('/src/assets/banner/IMG-20230523-WA0012.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
