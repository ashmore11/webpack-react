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
    path: path.join(__dirname, 'dist'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', '[name].manifest.json'),
      context: path.resolve(__dirname, 'src'),
    }),
  ],
};
