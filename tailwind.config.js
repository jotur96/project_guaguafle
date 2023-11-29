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
        grisSuave: '#F5F5F5',
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
        'screen-60': '60vh',
        'screen-76': '76vh'
      },
      boxShadow: {
        'up': '0px -8px 10px -5px rgba(0, 0, 0, 0.15)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
})

