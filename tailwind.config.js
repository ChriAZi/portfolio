module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'light-blue': '#D9DEE4',
      },
      lineHeight: {
        '2xl-line-height': '4rem',
        'xl-line-height': '3.5rem',
        'lg-line-height': '3rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
