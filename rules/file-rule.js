// # npm install --save file-loader
const { mode } = require('../constants.js');
module.exports = {
  test: /\.(png|svg|jpe?g|gif|woff|woff2|eot|ttf|otf)(\?[^('|")]*)?$/,
  use: [{
    loader: 'file-loader',
    options: {
    name(file) { // 资源名字
        if (mode === 'development') {
        return '[path][name].[ext]';
        }
        return '[hash].[ext]';
    },
    // 开发环境显示 完整路径
    // 线上环境 显示hash
    outputPath: mode === 'production' ? 'assests' : '',
    }
  }],
};
