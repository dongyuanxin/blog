---
title: "《JavaScript高级程序设计》读书笔记"
date: "2019-05-28"
permalink: "2019-05-28-professional-js-notes"
---

## 第一章 JavaScript 简介

### 1.2 js 实现

1. 一个完成的 js 实现由 3 个不同部分组成：核心（ECMAScript）、文档对象模型（DOM）、浏览器对象模型（BOM）
2. 常见的 Web 浏览器知识 ECMAScript 实现的**宿主环境**之一，其他环境包括 Node、Adobe Flash
3. DOM：是针对 XML 经过扩展用于 HTML 的程序编程 API
4. BOM：控制浏览器显示的页面以外部分

## 第二章 在 HTML 中使用 JavaScript

### 2.1 `<script>`标签

下面两个属性可以控制 script 加载，它们不能严格保证执行顺序：

1. async：不阻塞页面，下载并且执行脚本
2. defer：脚本延迟到文档被完全解析和显示后再执行。

script 脚本中不要嵌入出现`"</script>"` 字符串，会被错误识别为结束标签。正确写法是：`"<\/script>"`。

如果 script 标签中既有代码内容，并且也引入了外部脚本（src 属性）。浏览器只会执行外部脚本。

### 2.2 可扩展超文本标记语言 XHTML

XHTML 编写比 HTML 更严格，例如 `>` 等符号都需要转义。为了保证 js 正常运行，用 `CDATA` 来包裹。

下面代码在不兼容 xml 的浏览器可以平稳退化：

```html
<script type="text/javascript">
  //<![CDATA[
  function compare(a, b) {
    if (a < b) {
      console.log("a is less than b");
    }
  }
  //]]>
</script>
```

### 2.4 `<noscript>` 元素

对于不支持 js 的浏览器，此标签可平稳退化。

```html
<body>
  <noscript>
    <p>请启用JavaScript</p>
  </noscript>
</body>
```

## 第三章 基本概念

### 3.1 语法

针对 ES3 的不确定行为，ES5 增加了严格模式，它是“编译指示”，用来告知 Js 引擎切换到严格模式，需要在代码顶部添加：`"use strict";`

### 3.2 关键字和保留字

保留字是之后可能被用作关键字的标识符。比如`super`，在 es6 中被用在了子类的构造函数中。

### 3.3 变量

`var` 声明的变量存在声明提升，如下：

```javascript
var a = 1;

function test() {
  console.log(a);
  var a = 2;
  a = 3;
}

test();
```

由于变量声明提升以及函数作用域，相当于以下代码：

```javascript
var a = 1;

function test() {
  var a = undefined;
  console.log(a);
  a = 2;
  a = 3;
}

test();
```

因此，输出结果是 `undefined`

### 3.4 类型

#### 3.4.1 null 和 undefined

`null` 和 `undefined` 不相同，区别如下：

- null：空对象指针，`typeof null` 返回 `"object"`，常用于定义空变量
- undefined：未定义，变量只声明时，默认赋值`undefined`

#### 3.4.2 8 和 16 进制

`number`类型：

- 8 进制：0 开头，例如 070
- 16 进制：0x 开头，例如 0x1f
- 科学计数法：1ex，例如 1e2 = 100

所有 8 和 16 进制值在运算时，都会被转化为 10 进制。

#### 3.4.3 特殊数字

`Number.MIN_VALUE` 和 `Number.MAX_VALUE` 分别返回最小值和最大值。超出范围的会被转化为 `Infinity` 。

不合法的数，比如 1/0 ，会返回 `NaN`，需要用 `isNaN` 判断。对于对象，`isNaN` 先调用 `valueOf` ，再掉用 `toString` 。

```javascript
const validNum = {
  valueOf: function() {
    return 1;
  },
  toString: function() {
    return "str";
  }
};

console.log(isNaN(validNum)); // output: false
```

#### 3.4.4 字符串转数字

`parseInt` 应该在第二个参数指明进制。

#### 3.4.5 字符串

字符串变量的值是不可变的，当改变值时，会销毁之前的字符串，然后用包含新值的字符串填充变量。

调用数值的 `toString` 方法，给定参数代表进制。

特殊编码：

- `\xnn`：以 16 进制代码 nn 表示字符
- `\unnnn`：以 16 进制代码 nnnn 表示 Unicode 字符

```javascript
console.log("\x41"); // A
console.log("\u03a3"); // Σ
```

#### 3.4.6 Object 类型

Object实例都有以下属性：

- constructor: 指向创建对象的函数
- hasOwnProperty
- obj1.isPrototypeOf(obj2): obj1 是不是在obj2的原型链上
- propertyIsEnumerable(propName): propName能否用for-in枚举

关于 `isPrototypeOf`:

```javascript
function Demo() {}
var o = {}

var demo = new Demo()
console.log(o.isPrototypeOf(demo)) // output: false

// 将o放在demo实例的原型链上
demo.__proto__ = Demo.prototype = o
console.log(o.isPrototypeOf(demo)) // output: true
```

对于BOM、DOM等宿主环境提供的对象，可能并不继承Object，不具有以上通性。

### 3.5 操作符

1、**位操作**

- `~`: 按位非。`~110 => 001`
- `&`: 按位与。
- `|`: 按位或。
- `^`: 异或操作。位数相同返回0，不同返回1。
- `<<`: 左移
- `>>`: 默认情况，有符号右移，保留符号位（符合正常逻辑）
- `>>>`: 无符号右移，在移动时候忽略符号位。

正因为移动时候忽略符号位，因此例如 -64 = 111111..11100000，负数的补码会被当做正数的二进制码。

2、**布尔操作**

一般直接使用 `!!` 进行转化。

3、**逗号操作符**

```javascript
var num1 = 1, num2 = 2, num3 = 3 // 多变量声明

var num = (3, 2, 1) // 从右边开始解析，返回 1
console.log(num) // output: 1
```

### 3.6 语句

