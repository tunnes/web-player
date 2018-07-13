/* eslint-disable */

const webpack = require('webpack')

const MiniCSSplugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
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
  plugins: [
    new MiniCSSplugin({ filename: 'bundle.css' })
  ],
  module: {
    rules: [
      // To use BABEL presets in project.
      { test: /.js[x]?$/, use: ['babel-loader'] },
      
      // To use SASS package in project.
      { test: /\.s?[ac]ss$/, use: [ MiniCSSplugin.loader, 'css-loader', 'sass-loader' ] }
    ],
  }
}