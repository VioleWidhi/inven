/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['poppins'],
    },

    extend: {
      container: {
        center: true,
        padding: '16px'
      },

      colors : {
        'primary': '#FFCC31',
        'blacky': '#111A25',
        'bluey': '#1D2530',
        'graying': '#293039',
        'texting': '#e2e8f0'

      },

      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
