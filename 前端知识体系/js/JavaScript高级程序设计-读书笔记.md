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
