const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const env = require('./env')

module.exports = merge(common, {
  mode: env.modes.prod,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(env.paths.public, 'template.prod.html')
    })
  ]
})
