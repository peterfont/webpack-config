const { mode } = '../constants';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [];

if (process.env.npm_config_report) {
  plugins.push(require('./bundle-analyzer-plugin'));
}

if (mode === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin()); // hmr
} else {
  plugins.push(new MiniCssExtractPlugin({
    filename: mode === 'development' ? '[name].css' : '[name].[hash].css',
    chunkFilename: mode === 'development' ? '[id].css' : '[id].[hash].css',
  }));
}

module.exports = mergePlugins = (extendsPlugins) => {
  return [...plugins, ...(extendsPlugins || [])];
};