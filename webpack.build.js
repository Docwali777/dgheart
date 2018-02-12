const path = require('path');
const webpack = require('webpack');

//
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {loader: "css-loader", options: { minimize: true }}
        })
      },
      { test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader', options: {limit: 100000}
       }
    ]
  },
  plugins: [
//     new CompressionPlugin({
//   asset: '[path].gz[query]',
//   algorithm: 'gzip',
//   test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
//   threshold: 10240,
//   minRatio: 0.8
// }),
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
       template: 'src/index.html',
       minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
     }),
     new CleanWebpackPlugin(['public'], {
       verbose:  true,
       dry:    false
     }), 
     new ExtractTextPlugin("styles.css"), 
     new StyleExtHtmlWebpackPlugin({
      minify: true
    })
  ]
}
