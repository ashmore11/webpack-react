const path = require('path');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const browsers = require('../package.json').config.browsers;
const entry = require('./entry');
const loaders = require('./loaders');
const plugins = require('./plugins');
const resolve = require('./resolve');
const validate = require('webpack-validator');

const DEV = process.env.NODE_ENV === 'dev';
const PATHS = {
  src: path.resolve(process.env.PWD, 'src'),
  dist: path.resolve(process.env.PWD, 'dist'),
};

const config = {
  debug: DEV,
  cache: true,
  devtool: DEV ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  entry,
  output: {
    path: PATHS.dist,
    filename: 'scripts/bundle.js',
    publicPath: '/',
  },
  plugins,
  module: {
    loaders,
  },
  postcss: {
    defaults: [
      autoprefixer({ browsers }),
      mqpacker,
    ],
  },
  resolve,
};

module.exports = validate(config);
