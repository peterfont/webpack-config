const miniCssExtractLoader = require('./minicss-extract-loader');
const sassRule = require('./sass-rule');

const { use } = sassRule;
const mergeUse = [...use];
mergeUse.splice(1,0,miniCssExtractLoader)
module.exports = {
  test: /\.scss$/,
  use: mergeUse,
};

