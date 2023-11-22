/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
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
      },
    },
  },
  plugins: [],
})

