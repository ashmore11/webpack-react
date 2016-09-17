const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.env.PWD, 'dist/scripts'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(process.env.PWD, 'dist/scripts', '[name].manifest.json'),
      context: path.resolve(process.env.PWD, 'src'),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(...[
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false },
    }),
  ]);
}

module.exports = config;
