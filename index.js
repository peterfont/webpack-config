const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mode, devServerPort, contextPath, publicPath } = require('./constants');
const mergePlugins = require('./plugins');
const getSourceFile = function(sourcePath, contextPath) {
  return path.resolve(contextPath || __dirname, sourcePath);
}
const rules = require('./rules');

const defaultOptions = {
  entryPath: './src/index.js',
  outputName: '[name].[hash:6].js',
  outputPath: './dist/',
  template: './src/index.html',
};
module.exports = function(settting = {}) {
  const options = Object.assign(defaultOptions, settting);
  const { entryPath, outputName, plugins, template, outputPath, port = devServerPort } = options;  
  return {
    entry: {
      app: getSourceFile(entryPath, contextPath),
    },
    output: {
      path: getSourceFile(outputPath, contextPath),
      filename: outputName,
      publicPath,
    },
    module: {
      rules,
    },
    plugins: mergePlugins(plugins).concat(new HtmlWebpackPlugin({
      template: getSourceFile(template, contextPath),
    })),
    devServer: {
      contentBase: getSourceFile(outputPath, contextPath),
      compress: mode !== 'development',
      port: port,
    },
    mode,
  }
};