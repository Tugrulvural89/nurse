/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/*.{html,js}", './components/**/*.{html,js}',"./src/**/*.{js,jsx,ts,tsx}",],
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

