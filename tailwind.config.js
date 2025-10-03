/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // خلي هذا باش Tailwind يشوف كل ملفات React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
