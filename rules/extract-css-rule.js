const miniCssExtractLoader = require('./minicss-extract-loader');
// # npm install --save css-loader
const postcssLoader = require('./postcss-rule.js');
const { mode } = require('../constants');
module.exports = {
  test: /\.css$/,
  use: [
    miniCssExtractLoader,
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