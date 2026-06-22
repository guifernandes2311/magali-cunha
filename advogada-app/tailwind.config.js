/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        gold: '#C9A060',
        'gold-dark': '#A87D30',
        charcoal: '#2C2C2C',
        'off-white': '#F0EAD6',
        'gold-border': 'rgba(201,160,96,0.5)',
      },
    },
  },
  plugins: [],
}
