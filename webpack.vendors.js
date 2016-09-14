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
    path: path.join(__dirname, 'dist/scripts'),
    library: '[name]',
  },
  plugins: process.env.NODE_ENV === 'dev' ? [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist/scripts', '[name].manifest.json'),
      context: path.resolve(__dirname, 'src'),
    }),
  ] : [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist/scripts', '[name].manifest.json'),
      context: path.resolve(__dirname, 'src'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false },
    }),
  ],
};
