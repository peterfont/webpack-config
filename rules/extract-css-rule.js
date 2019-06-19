const miniCssExtractLoader = require('./minicss-extract-loader');
const cssRule = require('./sass-rule');

const { use } = cssRule;
const mergeUse = [...use];
mergeUse.splice(1,0,miniCssExtractLoader)
module.exports = {
  test: /\.css$/,
  use: mergeUse,
};

