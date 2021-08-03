module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      'light-blue': '#D9DEE4',
      'light-orange': '#EFC57D',
      'light-purple': '#828CA7',
      'white': '#FFFFFF'
    },
    extend: {
      lineHeight: {
        'extra-loose': '5rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
