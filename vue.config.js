const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [new StyleLintPlugin({
      Cache: true, // cache
      Fix: false, // repair automatically
      emitErrors: true,
      failOnError: false,
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
  transpileDependencies: [
    'vuetify',
  ],
}
