const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/client')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/template/index.html',
    }),
    new HtmlWebpackPlugin({
        filename: '404.html',
        inject: true,
        template: './src/template/404.html',
    }),
    new CopyWebpackPlugin([ { from: path.resolve(__dirname, '../src/server/index.js'), to: path.resolve(__dirname, '../dist/server') } ])
  ]
};