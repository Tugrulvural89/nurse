/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/*.{html,js}", './components/**/*.{html,js}',"./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}

