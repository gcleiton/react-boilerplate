const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    })
  ]
})
