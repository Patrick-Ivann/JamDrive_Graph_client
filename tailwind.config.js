module.exports = {
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    inset: {
      '0': 0,
     auto: 'auto',
     '1/2': '50%',
    }
  },
  variants: {
    filter: ['responsive,hover'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters')(),
  ],
}
