/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

