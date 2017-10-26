const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["env", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
        { test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader', options: {limit: 100000}
         }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DgHeart.io',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['public'], {
      verbose:  true,
      dry:    false
    })
  ]
}
