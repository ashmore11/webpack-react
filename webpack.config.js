const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const browsers = require('./package.json').config.browsers;

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/scripts/entry',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ProgressBarPlugin({ clear: false }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src/scripts'),
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass', 'import-glob'],
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
  postcss: {
    defaults: [
      autoprefixer({ browsers }),
      mqpacker,
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      app: path.join(__dirname, 'src/scripts'),
      actions: path.join(__dirname, 'src/scripts/actions'),
      components: path.join(__dirname, 'src/scripts/components'),
      containers: path.join(__dirname, 'src/scripts/containers'),
      reducers: path.join(__dirname, 'src/scripts/reducers'),
      utils: path.join(__dirname, 'src/scripts/utils'),
      styles: path.join(__dirname, 'src/styles'),
    },
  },
};
