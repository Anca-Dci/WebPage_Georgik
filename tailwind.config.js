/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      customBlue: '#2da1f2',
      customRed: '#DC143c',
      customGreen: '#7FFF00'
    }
  },
  },

  plugins: [],
  }