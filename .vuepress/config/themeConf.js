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
    { text: '前端体系', link: '/passages/2019-03-26-javascript-first/' },
    { text: '设计模式', link: '/passages/2018-10-23-singleton-pattern/' },
    { text: 'Git手册', link: '/passages/2018-09-06-git-tag-and-version/' },
    { text: '每周分享', link: '/passages/2019-06-10-weekly-share/' },
    {
      text: '更多',
      items: [
        { text: '友情链接', link: '/friends/' },
        { text: '网站信息', link: '/about/' },
      ]
    }
  ]
}
