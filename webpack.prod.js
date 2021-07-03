const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/')
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled-components'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    })
  ]
})
