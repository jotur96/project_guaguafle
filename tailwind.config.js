/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guaflePrimary: '#FFAA6D',
        guafleSecondary: '#FAEFDF',
        guaflePink: '#FF87B9'
      },
      borderRadius: {
        'bordeado-ig': '10px', // Define tu radio de esquina personalizado
      },
    },
  },
  plugins: [],
}

