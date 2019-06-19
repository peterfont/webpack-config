const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssLoader = require('./postcss-rule');
const { mode, publicPath } = require('../constants.js');
module.exports = {
  test: /\.scss$/,
  use:[
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath,
        hmr: mode === 'development',
      },
    },
    {
      loader: "css-loader",
      options: {
        sourceMap: mode === 'produciton',
        importLoaders: 2, //   0 =>无加载器（默认）; 1 => postcss-loader; 2 => postcss-loader，sass-loader 
      },
    },
    postcssLoader,
    'sass-loader'
  ]
};
