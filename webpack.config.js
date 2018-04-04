const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'src/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true
    })
  ]
}
