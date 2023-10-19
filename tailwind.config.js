/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#242424',
        secondary: '#214664',
        effect: '#be185d'
      },
    },
  },
  plugins: [],
}

