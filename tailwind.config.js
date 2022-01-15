module.exports = {
  // mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F8F8F8",
          150: "#EEEEEE",
          200: "#D0D0D0",
          300: "#AEAEAE",
        },
        purple: {
          600: "#4B4AEF",
        },
        yellow: {
          600: "#FFCA1D",
        },
        red: {
          600: "#F84E29",
        }
      },
      width: {
        '226': '226px',
        '366': '366px',
      },
      height: {
        '50': '50px',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      zIndex: ['hover', 'active'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
