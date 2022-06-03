const path = require('path');

module.exports = {
  // publicPath: '/',
  outputDir: 'vue2',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 3003,
    overlay: {
      warnings: false,
      errors: true,
    },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
  },
  lintOnSave: false,

  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-vue2`,
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("mini-micro-app", path.join(__dirname, '../../src/index.js'))
  },
}
