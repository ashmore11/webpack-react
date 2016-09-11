const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const browsers = require('./package.json').config.browsers;

function resovlePath(pathName, fileName = '') {
  return path.resolve(__dirname, pathName, fileName);
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    resovlePath('src/scripts', 'entry.js'),
  ],
  output: {
    path: resovlePath('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/scripts/',
  },
  plugins: [
    new ProgressBarPlugin({ clear: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false },
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: resovlePath('src/scripts'),
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass', 'import-glob'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file',
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
      app: resovlePath('src/scripts'),
      actions: resovlePath('src/scripts/actions'),
      components: resovlePath('src/scripts/components'),
      containers: resovlePath('src/scripts/containers'),
      reducers: resovlePath('src/scripts/reducers'),
      utils: resovlePath('src/scripts/utils'),
      styles: resovlePath('src/styles'),
      images: resovlePath('src/images'),
    },
  },
};