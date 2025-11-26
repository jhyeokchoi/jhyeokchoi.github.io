/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Deep Blue/Navy (slate-900)
          light: '#1e293b',   // slate-800
        },
        accent: {
          DEFAULT: '#0ea5e9', // Sky Blue (sky-500)
          teal: '#14b8a6',    // Teal (teal-500)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

