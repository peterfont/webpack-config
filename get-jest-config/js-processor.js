const getBabelConfig = require('../get-babel-config');
module.exports = require('babel-jest').createTransformer(getBabelConfig('react'));