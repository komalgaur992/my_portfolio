/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffb6b9',
          blue: '#a2d5f2',
          green: '#b8f2e6',
          yellow: '#ffe156',
        },
        neon: {
          green: '#39ff14',
          pink: '#ff00c8',
          blue: '#00f0ff',
        },
      },
    },
  },
  plugins: [],
}
