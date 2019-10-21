const sidebar = require("./sidebar-auto.js");

module.exports = {
  repo: "dongyuanxin/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar,
  nav: [
    // 前端
    {
      text: "前端",
      items: [
        {
          text: "JavaScript",
          link: "/passages/2019-03-26-javascript-first/"
        },
        {
          text: "React",
          link: "/passages/2019-04-08-react-components-communication/"
        },
        {
          text: "TypeScript",
          link: "/passages/2019-08-27-typescript-notes/"
        },
        { text: "ES6", link: "/passages/2019-04-09-es6/" },
        { text: "HTML5", link: "/passages/2019-04-10-html5-drag-drop/" },
        { text: "浏览器与安全", link: "/passages/2019-05-15-browser/" }
      ]
    },
    // UI
    {
      text: "UI",
      items: [
        { text: "css", link: "/passages/2018-06-05-border-sizing/" },
        {
          text: "scss",
          link: "/passages/2019-05-17-why-i-stopped-using-sass/"
        },
        { text: "动画", link: "/passages/2019-07-16-font-animation/" }
      ]
    },
    // 算法
    {
      text: "算法",
      items: [
        {
          text: "剑指offer",
          link: "/passages/2019-06-23-algorithm-offer/"
        },
        {
          text: "设计模式",
          link: "/passages/2018-10-23-singleton-pattern/"
        }
      ]
    },
    // Node
    {
      text: "Node",
      items: [
        { text: "Koa", link: "/passages/2019-06-21-deep-in-koa/" },
        {
          text: "命令行",
          link: "/passages/2019-05-07-play-node-shell/"
        },
        { text: "测试", link: "/passages/2019-05-04-jest-base/" },
        { text: "Serverless", link: "/passages/2019-08-14-game-gomoku/" }
      ]
    },
    // 其它
    {
      text: "其它",
      items: [
        {
          text: "文章归档",
          link: "/guide/"
        },
        {
          text: "学习笔记",
          link: "/passages/2019-10-02-os-base/"
        },
        {
          text: "友情链接",
          link: "/friends/"
        },
        {
          text: "开发工具",
          items: [
            {
              text: "Webpack4",
              link: "/passages/2018-07-29-webpack-demos-introduction/"
            },
            { text: "Git", link: "/passages/2018-09-06-git-tag-and-version/" }
          ]
        }
      ]
    }
  ]
};
