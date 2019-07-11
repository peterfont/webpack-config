# 开箱即用的webpack配置

## 快速开始

1. 创建目录：
```
my-app
  |_src
    |_index.js
    |_index.html
  |_webpack.config.js
  |_package.json
  |_package-lock.json
```
2. 编辑webpack.config.js
```
const config = require('@panrpeng/webpack-config');

module.exports = config;
```
3. 编辑package.json
```
"scripts": {
  "dev": "NODE_ENV=development webpack-dev-server",
  "build-prod": "rm -rf dist/* && NODE_ENV=production webpack",
  "analysis": "npm_config_report=true npm run build-prod",
  "check-types": "tsc"
}
```
4. 安装webpack-config
```
npm i -D @panrpeng/webpack-config
```
5. 启动
```
npm run dev
```
