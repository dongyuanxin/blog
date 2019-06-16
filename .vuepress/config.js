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
    require('./plugins/my-router'),
    [
      require('vuepress-plugin-comment'),
      {
        choosen: 'gitalk', 
        options: {
          clientID: '6558fdf298fa596c5d8c',
          clientSecret: '483e8b55319cb5e69760db9b2c02c4b66db56568',
          repo: 'blog',
          owner: 'dongyuanxin',
          admin: ['dongyuanxin'],
          id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
          distractionFreeMode: false,  // Facebook-like distraction free mode
          labels: ['Gitalk', 'Comment'],
          title: '「评论」<%- frontmatter.title %>',
          body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
        }
      }
    ]
  ]
}