const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(process.env.PWD, 'dist/scripts'),
    library: '[name]',
  },
  plugins: process.env.NODE_ENV === 'dev' ? [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(process.env.PWD, 'dist/scripts', '[name].manifest.json'),
      context: path.resolve(process.env.PWD, 'src'),
    }),
  ] : [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(process.env.PWD, 'dist/scripts', '[name].manifest.json'),
      context: path.resolve(process.env.PWD, 'src'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false },
    }),
  ],
};
