const {
  baseConf,
  mdConf,
  themeConf,
} = require('./config/')

module.exports = {
  ...baseConf,
  markdown: mdConf,
  themeConfig: themeConf,
  plugins: [
    require('./plugins/my-gitalk'),
    require('./plugins/my-router')
  ]
}