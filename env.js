const path = require('path')

module.exports = {
  modes: {
    dev: 'development',
    prod: 'production'
  },
  paths: {
    source: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'dist'),
    public: path.resolve(__dirname, 'public'),
    modules: path.resolve(__dirname, 'node_modules')
  },
  server: {
    port: 3001
  }
}
