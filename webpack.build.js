const path = require('path');
const webpack = require('webpack');

//
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
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
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
  threshold: 10240,
  minRatio: 0.8
}),
    new webpack.optimize.UglifyJsPlugin({
           compress: {
               warnings: false,
               screw_ie8: true,
               conditionals: true,
               unused: true,
               comparisons: true,
               sequences: true,
               dead_code: true,
               evaluate: true,
               if_return: true,
               join_vars: true
           },
           output: {
               comments: false
           }
       }),
       new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     }),
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
