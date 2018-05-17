const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000
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
  ]
};