module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          strong: 'hsl(172, 67%, 45%)',
          dark: 'hsl(183, 100%, 15%)',
          dark_gray: 'hsl(186, 14%, 43%)',
          light_gray: 'hsl(185, 41%, 84%)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
