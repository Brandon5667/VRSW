/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif', 'open-sans'],
    },
    extend: {
      colors: {
        navy: '#1e3a5f',
        gold: '#d4a574',
      }
    },
  },
  plugins: [],
}
