module.exports = {
  content: [
    './client/App.jsx',
    './client/Index.jsx',
    './client/pages/**/*.jsx',
    './client/components/**/*.jsx',
    './client/lib/**/*.jsx'
  ],
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif']
    },
    extend: {
      screens: {
        sm: '500px'
      }
    }
  },
  plugins: []
};
