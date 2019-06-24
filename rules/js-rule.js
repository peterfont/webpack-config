// webpack 4.x | babel-loader 8.x | babel 7.x
// babel基础支持
// npm install -S babel-loader @babel/core @babel/preset-env webpack
// polyfill支持
// npm install -S @babel/plugin-transform-runtime
// npm install -S @babel/runtime
module.exports = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      // babel-preset-env设置： https://babeljs.io/docs/en/next/babel-preset-env.html
      presets: [['@babel/preset-env', {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
        // 此选项配置如何用@babel/preset-env处理polyfill
        // @babel/polyfill在7.4.0中已弃用
        useBuiltIns: 'usage',
        // 需要显示指定 corejs版本
        // npm install -S core-js@3
        corejs: {
          version: 2,
          proposals: true
        }
      }]],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
}