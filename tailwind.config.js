module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cw-grey-050': '#F0F4FB',
        'cw-grey-100': '#D9E2EC',
        'cw-grey-700': '#334E68',
        'cw-grey-800': '#243B53',
        'cw-grey-900': '#102A43',
        'cw-blue-300': '#62B0E8',
        'cw-blue-400': '#4098D7',
        'cw-blue-600': '#186FAF',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}