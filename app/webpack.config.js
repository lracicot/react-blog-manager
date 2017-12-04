const webpack = require('webpack');

module.exports = {
  entry:'./src/app.js',
  output: {
    filename:'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader:'babel-loader',
      options: {
        presets: ['react', 'env', 'stage-1']
      }
    }]
  }
};
