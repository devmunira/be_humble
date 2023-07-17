/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'bannarImage': "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')",
      },
      placeholderColor: {
        'red': '#444',
      }
    },
    colors: {
      ligntWhite : "#FAFAFA",
      white : '#fff',
      primary    : '#FF5959',
      ligntBlue  : 'rgba(79, 157, 166, 0.10)',
      lingtYellow  : '#FFF4D6',
      gray  : '#AA9F9F',
      secondary : 'rgba(255, 89, 89, .10)',
      textColor: '#707070',
      black : '#121212'
    },
    fontFamily: {
      inter : ["Inter" , "sans-serif"],
      lobster : ["Lobster" , "cursive"],
      poppins : ["Poppins" , "sans-serif"],
    },
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '991px',
      'xl': '1199px',
      'xll': '1440px',
    },
  },
  plugins: [],
}

