const { mode } = './constants';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [];

if (mode === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin()); // hmr
} else {
  plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }));
}

module.exports = mergePlugins = (extendsPlugins) => {
  return [...plugins, ...(extendsPlugins || [])];
};