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
        guaflePrimary: '#FF8A66',
        guafleSecondary: '#fcf5e8',
        guaflePink: '#f47488',
        guafleOrange: '#FF3B00',
        guafleDark: '#353531',
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
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

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

