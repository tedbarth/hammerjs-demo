const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'canttouchthis.js',
    path: __dirname
  },
  mode: 'production',
  devtool: 'source-map'
};