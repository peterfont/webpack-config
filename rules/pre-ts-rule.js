// npm install tslint tslint-loader -S
module.exports = {
  test: /\.ts$/,
  enforce: 'pre',
  // include: '',
  use: [
    {
      loader: 'tslint-loader',
      options: { /* Loader options go here */ }
    }
  ]
}