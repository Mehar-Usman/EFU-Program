const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
          custom: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '320px', // Extra small screens and up
        'sm': '350px', // Small screens and up
      },
      colors: {
        darkBlue: '#173477',
        darkPink:'#5c1748',
        lightBlue:'#5b6fa0',
        cyanDark:'#057e8c'
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      const headings = {
        h1: {
          fontSize: '2.25rem', 
          fontWeight: 'bold',
        },
        h2: {
          fontSize: '1.875rem',
          fontWeight: 'bold', 
        },
        h3: {
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
        },
        h4: {
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
        },
        h5: {
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
        },
        h6: {
          fontSize: '1rem', 
          fontWeight: 'bold', 
        },
      };
      addComponents(headings);
    })
  ],
}
