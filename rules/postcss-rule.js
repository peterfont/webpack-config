// # npm install --save postcss-loader
const autoprefixer = require('autoprefixer')

module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    // config: { // 指定外部配置文件
    //   path: './',
    //   ctx: {
    //     // env,
    //     // file,
    //     // options,
    //   },
    // },
    plugins: (loader) => [
      require("postcss-flexbugs-fixes"), // 支持flex
      autoprefixer({
        overrideBrowserslist: [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 9" // React doesn't support IE8 anyway
          ],
          flexbox: "no-2009"
      }),
    ],
    // parser: 'sugarss',
    // syntax: 'sugarss',
    // stringifier: 'midas',
    // sourceMap: true,
  }
}