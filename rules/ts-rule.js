const getBabelConfig = require('../get-babel-config');
module.exports = {
  test: /\.tsx?$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: getBabelConfig('ts'),
  }
}