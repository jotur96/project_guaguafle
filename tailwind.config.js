/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guaflePrimary: '#FFAA6D',
        guafleSecondary: '#FAEFDF',
        guaflePink: '#FF87B9',
        guafleOrange: '#FF3B00',
      },
      borderRadius: {
        'bordeado-ig': '10px', // Define tu radio de esquina personalizado
      },
      width: {
        '700': '700px',
      },
      height: {
        '600': '600px',
        'screen-50': '50vh',
        'screen-76': '76vh'
      },
    },
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
})

