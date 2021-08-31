const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: false,
    content: [
      './frontend/ts/**/*.ts',
      './frontend/html/index.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluegray': colors.blueGray,
        'coolgray': colors.coolGray,
        'gray': colors.gray,
        'truegray': colors.trueGray,
        'warmgray': colors.warmGray,
        'red': colors.red,
        'orange': colors.orange,
        'amber': colors.amber,
        'yellow': colors.yellow,
        'lime': colors.lime,
        'green': colors.green,
        'emerald': colors.emerald,
        'teal': colors.teal,
        'cyan': colors.cyan,
        'sky': colors.sky,
        'blue': colors.blue,
        'indigo': colors.indigo,
        'violet': colors.violet,
        'purple': colors.purple,
        'fuchsia': colors.fuchsia,
        'pink': colors.pink,
        'rose': colors.rose
      },
      fontFamily: {
        'sans': ['Inter', '"M PLUS 1p"', 'Meiryo', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
