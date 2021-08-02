module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'content': ['Ubuntu', 'sans-serif'],
      'footer': ['Roboto', 'sans-serif']
    },
    colors: {
      'light-blue': '#D9DEE4',
      'light-orange': '#EFC57D',
      'light-purple': '#828CA7'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
