/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-dark-brown',
    'text-dark-brown',
    'bg-brown',
    'text-brown',
    'bg-light-cream',
    'text-light-cream',
    'bg-main',
    'dark-bg-main',
  ],

  darkMode: 'media', // Enables dark mode based on user system preference
  content: [
    "./src/**/*.{html,js}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brown: '#481a13',
        'dark-brown': '#241614',
        'light-cream': '#ebe6e0',
        'bg-main': '#646887',
        'dark-bg-main': '#26273b',
        'hover-text': '#481a13',
      },
      fontFamily: {
        plain: ['Inter', 'sans-serif'],
        fun: ['Viaoda Libre', 'serif'],
      },
    },
  },
  plugins: [],
};
