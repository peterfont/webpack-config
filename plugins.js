const { mode } = './constants';
const webpack = require('webpack');
const plugins = [];

if (mode === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin()); // hmr
}

module.exports = mergePlugins = (extendsPlugins) => {
  return [...plugins, ...(extendsPlugins || [])];
};