// # 全局配置信息
module.exports = {
  mode: process.env.NODE_ENV || 'development', // mode: deveopment, test, production
  devServerPort: 9000, // 
  contextPath: '.', // 默认路径
  extractCSS: false,
  publicPath: '../',
}
