/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',  // Black from the design
        'accent': '#FFD700',   // Yellow accent color
      },
    },
  },
  plugins: [],
}