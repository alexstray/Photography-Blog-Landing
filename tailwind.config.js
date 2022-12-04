/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    backgroundImage: {
      'hero': "url('./assets/hero.jpg')"
    },

    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
      },
    },

  },
  plugins: [],
}
