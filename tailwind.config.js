/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      colors: {
        _bg_primarary: "#2D2D2D",
        _footer_text: "#B3B3B3"
      }
    },
  },
  plugins: [],
}