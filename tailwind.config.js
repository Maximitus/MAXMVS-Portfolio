/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff8800',
          slate: '#2a3439',
          dark: '#1a2226',
          light: '#3a4449'
        }
      },
      fontFamily: {
        'brand': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

