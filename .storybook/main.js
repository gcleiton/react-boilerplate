const webpackConfigs = require('../webpack.common')

module.exports = {
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    })
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: webpackConfigs.resolve.alias
      }
    }
  },
  stories: ['../src/presentation/**/*.stories.(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode'
  ]
}
