const git = [
  '标签应用和版本管理',
  '批量修改log中的提交信息',
  'stash解惑与妙用'
]

const cloud = [
  '基于实时数据库-在线对战五子棋小游戏',
  '基于ServerLess的极简网页计数器：源码分析与最佳实践',
]

const frontend = [
  {
    title: 'JavaScript',
    collapsable: false,
    children: [
      'js/JavaScript基础知识梳理-上',
      'js/JavaScript基础知识梳理-下',
      'js/正则表达式',
      'js/前端面试中常考的源码实现',
      'js/JavaScript高级程序设计-读书笔记',
    ]
  },
  {
    title: 'TypeScript',
    collapsable: false,
    children: [
      'typescript/01.基础篇',
      'typescript/02.实战篇',
    ]
  },
  {
    title: 'ES6',
    collapsable: false,
    children: [
      'es6/Promise概述',
      'es6/ES6重难点整理',
      'es6/谈谈promise-async-await的执行顺序与V8引擎的BUG'
    ]
  },
  {
    title: 'HTML5',
    collapsable: false,
    children: [
      'html5/canvas学习和滤镜实现',
      'html5/canvas离屏技术与放大镜实现',
      'html5/HTML5原生拖放事件的学习与实践',
      'html5/FileAPI文件操作实战',
      'html5/websocket学习和群聊实现',
      'html5/ServiceWorker离线缓存实战',
    ]
  },
  {
    title: '浏览器与安全',
    collapsable: false,
    children: [
      '浏览器与安全/SSL连接并非完全安全问题解决',
      '浏览器与安全/浏览器常见考点',
      '浏览器与安全/Web安全与防护'
    ]
  },
  {
    title: '开发实战',
    collapsable: false,
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
    title: '动画设计',
    collapsable: false,
    children: [
      '动画设计/字体特效',
      '动画设计/输入框特效',
      '动画设计/按钮特效',
      '动画设计/Loader特效-基础篇',
      '动画设计/Loader特效-进阶篇'
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
  '2019/04-redis热key等问题研究',
  '2019/03-心谭-无声半年',
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
      '源码探索/koa源码：核心库原理',
      '源码探索/koa源码：手动实现',
    ]
  }
]

const algorithmOffer = [
  '',
  {
    title: '字符串',
    collapsable: false,
    children: [
      '字符串/01-替换空格',
      '字符串/02-字符串的全排列',
      '字符串/03-翻转单词顺序',
      '字符串/04-实现atoi',
    ]
  },
  {
    title: '查找',
    collapsable: false,
    children: [
      '查找/01-旋转数组最小的数字',
      '查找/02-数字在排序数组中出现的次数',
    ]
  },
  {
    title: '链表',
    collapsable: false,
    children: [
      '链表/01-从尾到头打印链表',
      '链表/02-快速删除链表节点',
      '链表/03-链表倒数第k节点',
      '链表/04-反转链表',
      '链表/05-合并两个有序链表',
      '链表/06-复杂链表的复制',
      '链表/07-两个链表中的第一个公共节点',
    ]
  },
  {
    title: '数组',
    collapsable: false,
    children: [
      '数组/01-二维数组中的查找',
      '数组/02-数组顺序调整',
      '数组/03-把数组排成最小的数',
      '数组/04-数组中的逆序对',
    ]
  },
  {
    title: '栈和队列',
    collapsable: false,
    children: [
      '栈和队列/01-用两个栈实现队列',
      '栈和队列/02-包含min函数的栈',
      '栈和队列/03-栈的压入弹出序列',
    ]
  },
  {
    title: '递归与循环',
    collapsable: false,
    children: [
      '递归与循环/01-青蛙跳台阶',
      '递归与循环/02-数值的整次方',
      '递归与循环/03-打印从1到最大的n位数',
      '递归与循环/04-顺时针打印矩阵',
      '递归与循环/05-数组中出现次数超过一半的数字',
      '递归与循环/06-最小的k个数',
      '递归与循环/07-和为s的两个数字',
      '递归与循环/08-和为s的连续正数序列',
      '递归与循环/09-n个骰子的点数',
      '递归与循环/10-扑克牌的顺子',
      '递归与循环/11-圆圈中最后剩下的数字',
    ]
  },
  {
    title: '树',
    collapsable: false,
    children: [
      '树/01-重建二叉树',
      '树/02-判断是否子树',
      '树/03-二叉树的镜像',
      '树/04-二叉搜索树的后序遍历序列',
      '树/05-二叉树中和为某一值的路径',
      '树/06-二叉树层序遍历',
      '树/07-二叉树转双向链表',
      '树/08-判断是否是平衡二叉树',
    ]
  },
  {
    title: '位运算',
    collapsable: false,
    children: [
      '位运算/01-二进制中1的个数',
      '位运算/02-二进制中1的个数进阶版',
      '位运算/03-数组中只出现一次的数字',
    ]
  },
  {
    title: '哈希表',
    collapsable: false,
    children: [
      '哈希表/01-丑数',
      '哈希表/02-第一次只出现一次的字符',
    ]
  },
  {
    title: '堆',
    collapsable: false,
    children: [
      '堆/01-最小的k个数'
    ]
  },
]

module.exports = {
  '/docs/Git实战手册/': git,
  '/docs/云开发技术/': cloud,
  '/docs/前端知识体系/': frontend,
  '/docs/设计模式手册/': design,
  '/docs/每周分享/': weekly,
  '/docs/webpack4系列教程/': webpack4,
  '/docs/NodeJS/': nodejs,
  '/docs/UI设计/': ui,
  '/docs/剑指offer刷题笔记/': algorithmOffer,
}
