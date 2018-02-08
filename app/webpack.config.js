const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
    // publicPath: './'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader:'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      disable: false,
      filename: 'main.css',
      allChunks: true
    }),
    HTMLWebpackPluginConfig
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + '/public',
    port: 9000
  }
};
