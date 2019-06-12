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
    collapsable: false,
    children: [
      'js/JavaScript基础知识梳理-上',
      'js/JavaScript基础知识梳理-下',
      'js/前端面试中常考的源码实现',
      'js/JavaScript高级程序设计-读书笔记',
    ]
  },
  {
    title: 'ES6',
    collapsable: false,
    children: [
      'es6/ES6重难点整理',
      'es6/谈谈promise-async-await的执行顺序与V8引擎的BUG'
    ]
  },
  {
    title: 'css',
    collapsable: false,
    children: [
      'css/Flex上手与实战',
      'css/你了解css3的nth-child吗'
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

module.exports = {
  '/Git实战手册/': git,
  '/云开发技术/': cloud,
  '/前端知识体系/': frontend,
  '/设计模式手册/': design,
  '/每周分享/': weekly
}
