const webpack = require('webpack');

module.exports = {
  debug: true,
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
