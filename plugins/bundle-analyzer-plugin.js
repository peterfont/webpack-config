// # npm install -S webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: '0.0.0.0',
  analyzerPort: '8889',
  openAnalyzer: true,
  generateStatsFile: true,
  statsFilename: 'stats.json'
});