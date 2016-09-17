const path = require('path');

const src = path.resolve(process.env.PWD, 'src');

const entry = [
  'babel-polyfill',
  `${src}/scripts/entry.js`,
];

if (process.env.NODE_ENV === 'dev') {
  entry.push(...[
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ]);
}

module.exports = entry;
