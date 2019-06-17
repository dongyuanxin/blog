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
    { 
      text: '前端体系',
      items: [
        { text: 'JavaScript', link: '/passages/2019-03-26-javascript-first/' },
        { text: 'ES6', link: '/passages/2019-04-09-es6/' },
        { text: '浏览器与安全', link: '/passages/2019-05-15-browser/' },
        { text: 'Webpack4教程', link: '/passages/2018-07-29-webpack-demos-introduction/' },
        { text: 'CSS', link: '/passages/2019-03-20-css3-flex/' },
      ]
    },
    { 
      text: '设计模式', 
      items: [
        { text: '创建型模式', link: '/passages/2018-10-23-singleton-pattern/' },
        { text: '结构型模式', link: '/passages/2018-12-16-flyweight-pattern/' },
        { text: '行为型模式', link: '/passages/2018-11-25-command-pattern/' },
      ]
    },
    {
      text: '笔记',
      items: [
        { text: '每周分享', link: '/passages/2019-06-10-weekly-share/' },
        { text: 'Git手册', link: '/passages/2018-09-06-git-tag-and-version/' },
      ]
    },
    {
      text: '更多',
      items: [
        { text: '友情链接', link: '/friends/' },
        { text: '网站信息', link: '/about/' },
      ]
    }
  ]
}
