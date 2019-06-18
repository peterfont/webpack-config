const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssLoader = require('./postcss-rule');
const { mode, publicPath } = require('../constants.js');
module.exports = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use:
    [
      {
        loader: "css-loader",
        options: {
          minimize: mode === 'produciton',
          sourceMap: mode === 'produciton',
          importLoaders: 1, //   0 =>无加载器（默认）; 1 => postcss-loader; 2 => postcss-loader，sass-loader 
        },
      },
      postcssLoader,
    ],
    publicPath,
  })
};
