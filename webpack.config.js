const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const browsers = require('./package.json').config.browsers;
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const common = {
  entry: [
    'babel-polyfill',
    `${PATHS.src}/scripts/entry.js`,
  ],
  output: {
    path: PATHS.dist,
    filename: 'scripts/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
    }),
    new AddAssetHtmlPlugin({
      filepath: `${PATHS.dist}/scripts/vendors.js`,
      includeSourcemap: false,
      publicPath: '/scripts/',
    }),
    new webpack.DllReferencePlugin({
      context: PATHS.src,
      manifest: require(`${PATHS.dist}/scripts/vendors.manifest.json`),
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: `${PATHS.src}/scripts`,
      query: { cacheDirectory: true },
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass', 'import-glob'],
      include: `${PATHS.src}/styles`,
    }, {
      test: /\.(jpg|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=images/[name].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
      include: `${PATHS.src}/images`,
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=fonts/[name].[ext]',
      include: `${PATHS.src}/styles/fonts`,
    }],
  },
  postcss: {
    defaults: [
      autoprefixer({ browsers }),
      mqpacker,
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.jpg', '.png'],
    alias: {
      app: `${PATHS.src}/scripts`,
      actions: `${PATHS.src}/scripts/actions`,
      components: `${PATHS.src}/scripts/components`,
      containers: `${PATHS.src}/scripts/containers`,
      reducers: `${PATHS.src}/scripts/reducers`,
      utils: `${PATHS.src}/scripts/utils`,
      styles: `${PATHS.src}/styles`,
      images: `${PATHS.src}/images`,
    },
  },
};

let config;

if (process.env.NODE_ENV === 'dev') {
  config = merge(common, {
    cache: true,
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

if (process.env.NODE_ENV === 'prod') {
  config = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: { warnings: false },
      }),
    ],
  });
}

module.exports = validate(config);
