const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const env = require('./env')

module.exports = merge(common, {
  mode: env.modes.dev,
  devServer: {
    contentBase: env.paths.output,
    writeToDisk: true,
    historyApiFallback: true,
    port: env.server.port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(env.paths.public, 'template.dev.html')
    })
  ]
})
