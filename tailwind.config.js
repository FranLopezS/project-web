/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cabecera': "url('images/cabecera.jpg')",
        'banner-contacto': "url('images/banner_contacto.jpg')"
      },
      colors: {
        'gunmetal': '#202938',
        'celestial-blue': '#009fe3'
      },
      fontFamily: {
        'nunito-sans': ['"Nunito sans"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

