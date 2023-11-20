/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guaflePrimary: '#FF3B00',
        guafleSecondary: '#FAEFDF',
        guaflePink: '#FF87B9'
      }
    },
  },
  plugins: [],
}

