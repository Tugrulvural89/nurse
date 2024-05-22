/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './public/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/app.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}

