const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { mode, publicPath } = require('../constants.js');
module.exports = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath,
    hmr: mode === 'development',
    reloadAll: mode === 'development',
  },
}
