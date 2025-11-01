/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // خلي هذا باش Tailwind يشوف كل ملفات React
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translate(0, 0)' },
          '25%': { transform: 'translate(-50%, -50%) translate(20px, -30px)' },
          '50%': { transform: 'translate(-50%, -50%) translate(-25px, 20px)' },
          '75%': { transform: 'translate(-50%, -50%) translate(15px, 25px)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
