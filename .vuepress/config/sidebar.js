const git = [
  '标签应用和版本管理',
  '批量修改log中的提交信息',
  'stash解惑与妙用'
]

const cloud = [
  {
    title: 'Serverless',
    children: [
      'serverless/基于ServerLess的极简网页计数器：源码分析与最佳实践'
    ]
  }
]

const frontend = [
  {
    title: 'JavaScript',
    children: [
      'js/JavaScript基础知识梳理-上',
      'js/JavaScript基础知识梳理-下',
      'js/正则表达式',
      'js/前端面试中常考的源码实现',
      'js/JavaScript高级程序设计-读书笔记',
    ]
  },
  {
    title: 'ES6',
    children: [
      'es6/Promise概述',
      'es6/ES6重难点整理',
      'es6/谈谈promise-async-await的执行顺序与V8引擎的BUG'
    ]
  },
  {
    title: 'HTML5',
    children: [
      'html5/canvas学习和滤镜实现',
      'html5/canvas离屏技术与放大镜实现',
      'html5/websocket学习和群聊实现',
      'html5/ServiceWorker离线缓存实战',
      'html5/HTML5原生拖放事件的学习与实践',
    ]
  },
  {
    title: '浏览器与安全',
    children: [
      '浏览器与安全/SSL连接并非完全安全问题解决',
      '浏览器与安全/浏览器常见考点',
      '浏览器与安全/Web安全与防护'
    ]
  },
  {
    title: '开发实战',
    children: [
      '开发实战/MathJax-让前端支持数学公式',
      '开发实战/momentjs使用详解',
      '开发实战/axios全局代理实战',
      '开发实战/React中的组件通信',
      '开发实战/微信网页登录逻辑与实现',
    ]
  }
]

const ui = [
  {
    title: 'css',
    collapsable: false,
    children: [
      'css/border-sizing属性详解和应用',
      'css/Flex上手与实战',
      'css/你了解css3的nth-child吗',
    ]
  },
  {
    title: 'scss',
    collapsable: false,
    children: [
      'scss/基础：配置与运行',
      'scss/进阶：继承、占位符和混合宏',
      'scss/【译】逐步替换Sass'
    ]
  },
  {
    title: '项目实战',
    collapsable: false,
    children: [
      '项目实战/个人博客UI设计'
    ]
  }
]

const design = [
  {
    title: '创建型模式',
    collapsable: false,
    children: [
      '创建型模式/单例模式',
      '创建型模式/工厂模式',
      '创建型模式/抽象工厂模式'
    ]
  },
  {
    title: '结构型模式',
    collapsable: false,
    children: [
      '结构型模式/享元模式',
      '结构型模式/代理模式',
      '结构型模式/桥接模式',
      '结构型模式/组合模式',
      '结构型模式/装饰者模式',
      '结构型模式/适配器模式',
    ]
  },
  {
    title: '行为型模式',
    collapsable: false,
    children: [
      '行为型模式/命令模式',
      '行为型模式/备忘录模式',
      '行为型模式/模板模式',
      '行为型模式/状态模式',
      '行为型模式/策略模式',
      '行为型模式/解释器模式',
      '行为型模式/订阅-发布模式',
      '行为型模式/责任链模式',
      '行为型模式/迭代器模式',
    ]
  }
]

const weekly = [
  '',
  '2019/02-心谭-如何缩小学习反馈周期',
  '2019/01-心谭-第一期',
  '2018/02-心谭-第二期',
  '2018/01-心谭-第一期',
]

const webpack4 = [
  '零：前言',
  '一：打包JS',
  '二：编译ES6',
  '三：多页面解决方案--提取公共代码',
  '四：单页面解决方案--代码分割和懒加载',
  '五：处理CSS',
  '六：处理SCSS',
  '七：SCSS提取和懒加载',
  '八：JS-Tree-Shaking',
  '九：CSS-Tree-Shaking',
  '十：图片处理汇总',
  '十一：字体文件处理',
  '十二：处理第三方JavaScript库',
  '十三：自动生成HTML文件',
  '十四：Clean-Plugin-and-Watch-Mode',
  '十五：开发模式与webpack-dev-server',
  '十六：开发模式和生产模式·实战',
]

const nodejs = [
  {
    title: '命令行交互',
    collapsable: false,
    children: [
      '命令行交互/玩转Nodejs命令行'
    ]
  },
  {
    title: '测试',
    collapsable: false,
    children: [
      '测试/Jest实战：单元测试与服务测试',
      '测试/Jest进阶：接入ts、集成测试与覆盖率统计'
    ]
  },
  {
    title: '源码探索',
    collapsable: false,
    children: [
      '源码探索/实现简易区块链',
      '源码探索/负载均衡：轮询调度算法实现',
      '源码探索/VemoJS源码拆解',
      '源码探索/koa源码：架构设计',
    ]
  }
]

module.exports = {
  '/Git实战手册/': git,
  '/云开发技术/': cloud,
  '/前端知识体系/': frontend,
  '/设计模式手册/': design,
  '/每周分享/': weekly,
  '/webpack4系列教程/': webpack4,
  '/NodeJS/': nodejs,
  '/UI设计/': ui
}
