const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config.js');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
});

server.listen(3000, 'localhost');
