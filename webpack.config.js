const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: "./public",
    port: 8080
  },
  module: {
    rules: [
      { test: /.js[x]?$/, use: ['babel-loader'] }
    ]
  }
}