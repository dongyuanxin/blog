const sidebar = require('./sidebar')

module.exports = {
  repo: 'dongyuanxin/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  nav: [
    { text: '导航', link: '/guide/' },
    { text: '前端', link: '/passages/2019-03-26-javascript-first/' },
    { text: '设计模式', link: '/passages/2018-10-23-singleton-pattern/' },
    { text: 'Git手册', link: '/passages/2018-09-06-git-tag-and-version/' },
  ]
}
