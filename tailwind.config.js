/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        _bg_primarary: "#2D2D2D",
        _footer_text: "#B3B3B3"
      }
    },
  },
  plugins: [],
}