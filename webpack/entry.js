const path = require('path');
const querystring = require('querystring');

const src = path.resolve(process.env.PWD, 'src');

const entry = [
  'babel-polyfill',
  `${src}/scripts/entry.js`,
];

if (process.env.NODE_ENV === 'dev') {
  const whmQuery = querystring.stringify({
    path: '/__webpack_hmr',
    timeout: 20000,
    reload: true,
    noInfo: true,
  });

  entry.push(...[
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?${querystring.unescape(whmQuery)}`,
  ]);
}

module.exports = entry;
