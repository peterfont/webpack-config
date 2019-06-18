
const { mode } = require('../constants');

const rules = [
  require('./file-rule.js'),
];

if (mode === 'production') { // 线上环境 抽出css文件
  rules.push(require('./extract-css-rule'));
  rules.push(require('./extract-sass-rule'));
} else {
  rules.push( require('./css-rule'));
  rules.push( require('./sass-rule'));
}

module.exports = rules;