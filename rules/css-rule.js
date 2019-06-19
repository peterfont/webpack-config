// # npm install --save style-loader css-loader
const postcssLoader = require('./postcss-rule.js');
const { mode } = require('../constants');
module.exports = {
  test: /\.css$/,
  use: [
    'style-loader', 
    {
      loader: 'css-loader',
      options: {
        sourceMap: mode === 'produciton',
        importLoaders: 1, //   0 =>无加载器（默认）; 1 => postcss-loader; 2 => postcss-loader，sass-loader 
      }
    },
    postcssLoader,
  ],
};