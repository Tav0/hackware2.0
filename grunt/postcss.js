module.exports = {
  options: {
    map: true,
    processors: [
      require('autoprefixer')({browsers: ['last 1 version']})
    ]
  },
  dist: {
    src: 'app/styles/style.css'
  }
};

