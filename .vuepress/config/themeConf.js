const sidebar = require('./sidebar')

module.exports = {
  repo: 'dongyuanxin/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  nav: [
    { text: '最新', link: '/guide/' },
    { 
      text: '大前端',
      items: [
        {
          text: '基础',
          items: [
            { text: 'JavaScript', link: '/passages/2019-03-26-javascript-first/' },
            { text: 'TypeScript', link: '/passages/2019-08-27-typescript-notes/' },
            { text: 'ES6', link: '/passages/2019-04-09-es6/' },
            { text: 'HTML5', link: '/passages/2019-04-10-html5-drag-drop/' },
            { text: '浏览器与安全', link: '/passages/2019-05-15-browser/' },
          ]
        },
        { text: '云开发技术', link: '/passages/2019-08-14-game-gomoku/' },
        {
          text: 'Node',
          items: [
            { text: '命令行交互', link: '/passages/2019-05-07-play-node-shell/' },
            { text: '测试', link: '/passages/2019-05-04-jest-base/' },
            { text: '源码探索', link: '/passages/2019-05-02-node-block-chain/' }
          ]
        },
        {
          text: '框架工具',
          items: [
            { text: 'Webpack4教程', link: '/passages/2018-07-29-webpack-demos-introduction/' },
            { text: '开发实战', link: '/passages/2019-04-08-react-components-communication/' },
          ]
        },
      ]
    },
    {
      text: 'UI设计',
      items: [
        { text: 'CSS3', link: '/passages/2018-06-05-border-sizing/' },
        { text: 'SCSS', link: '/passages/2019-05-17-why-i-stopped-using-sass/' },
        { text: '动画设计', link: '/passages/2019-07-16-font-animation/' },
        { text: '项目实战', link: '/passages/2018-09-09-mysql-blog-ui/' },
      ]
    },
    {
      text: '算法修炼',
      items: [
        {
          text: '算法和数据结构',
          items: [
            { text: 'JS版·剑指offer', link: '/passages/2019-06-23-algorithm-offer/' },
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
      ]
    },
    {
      text: '随手记',
      items: [
        { text: '每周分享', link: '/passages/2019-06-10-weekly-share/' },
        { text: 'Git手册', link: '/passages/2018-09-06-git-tag-and-version/' },
      ]
    },
    {
      text: '了解更多',
      items: [
        { text: '参与协作', link: '/together/' },
        { text: '友情链接', link: '/friends/' },
        { text: '网站信息', link: '/about/' },
      ]
    }
  ]
}
