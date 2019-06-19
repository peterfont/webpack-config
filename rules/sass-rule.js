// # npm install --save style-loader css-loader sass-loader
const postcssLoader = require('./postcss-rule.js');
const { mode } = require('../constants');
module.exports = {
  test: /\.scss$/,
  use: [
    'style-loader', 
    {
      loader: 'css-loader',
      options: { 
        importLoaders: 2, //   0 =>无加载器（默认）; 1 => postcss-loader; 2 => postcss-loader，sass-loader 
        sourceMap: mode === 'produciton',
      }
    },
    postcssLoader,
    'sass-loader',
  ],
};