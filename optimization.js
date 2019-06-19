const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { mode } = require('./constants');
module.exports = {
  minimizer: mode === 'production' ? [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] : [],
  noEmitOnErrors: mode === 'production',
  namedModules: mode === 'production',
}