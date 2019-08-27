---
title: "Flex上手与实战"
date: "2019-03-20"
permalink: "2019-03-20-css3-flex"
---

> `Flex`之于 CSS3 就如`Promise`之于 ES6，都解决了开发者的痛点问题，大大提高了生产力。借助`Flex`，可以轻松实现**栅栏布局**、**水平/垂直居中**、**自定义排列方向和顺序**等等需求。因此，`Flex`几乎是 CSS3 的必考内容。

### 前端工程师的福音：flex

原来写前端的过程中，得有一大部分的时间是花费在了水平/垂直居中对齐这件事情上，而网上也是一大堆试图解释某一种对齐方法是正确的文章，搞得头昏脑胀。

终于，弹性布局`flex`来了，现在团队的开发，在布局上都采用了`flex`，毕竟不要把生命浪费在对齐这件事情上。

### 容器的属性和常用值

容器可以通过设置`display`属性为`flex` / `inline-flex`（行内 flex）来指定其为 flex 布局。

下面，将记录一下容器的属性和常用值，基本可以囊括大多数应用场景哦。

| 属性            | 含义         | 值                                                                        | 常用值                                         |
| --------------- | ------------ | ------------------------------------------------------------------------- | ---------------------------------------------- |
| flex-direction  | 项目排列方向 | row(默认)、row-reverse、column、column-reverse                            | row / column                                   |
| flex-wrap       | 项目是否换行 | nowrap(默认)、wrap、wrap-reverse                                          | wrap（允许换行）                               |
| justify-content | 水平对齐方向 | flex-start(默认)、flex-end、center、space-between、space-around           | center(**水平居中**)/ space-around(等间距布局) |
| align-items     | 垂直对齐方向 | flex-start、flex-end、center、baseline、stretch(默认: 占满整个容器的高度) | center(**垂直居中**)                           |

### 项目的属性和常用值

首先来看下项目元素上常用的 2 个属性，`order`和`flex-grow`：

| 属性      | 含义               | 值                         | 常用值 |
| --------- | ------------------ | -------------------------- | ------ |
| order     | 项目本身的排列顺序 | 整数，默认为 0。越小越靠前 | 整数   |
| flex-grow | 项目的放大比例     | ≥0 的整数，默认为 0        | 1      |

其中，`order`很好理解，下面通过一个例子来展示`flex-grow`属性的妙用：

```html
<html>
  <head>
    <style>
      div {
        display: flex;
      }
      span:nth-child(1) {
        flex-grow: 1;
      }
    </style>
  </head>
  <body>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </body>
</html>
```

可以在浏览器中看到，第一个`<span>`标签由于设置了`flex-grow: 1`，它自动占据了父容器除了剩下两个`<span>`标签外的所有空间！

### flex 常见应用

**场景 ①：水平垂直居中**

以上面的`html`结构为例，如果要让`<div>`中的元素水平垂直居中，只需要以下样式代码：

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**场景 ②：左右两侧布局，其中一侧宽度确定；另一侧宽度占满剩余空间，并且自动响应**

我们要做的就是将自动响应的那一侧的元素的`flex-grow`属性设置为 1 即可。

**场景 ③：栅栏布局系统**

还是以上面的`html`结构为例，实现一个将屏幕等分为 12 列，3 个`<span>`标签分别占据屏幕宽度的：1/6、1/6 和 2/3。

```css
span:nth-child(1) {
  flex: 2;
}
span:nth-child(2) {
  flex: 2;
}
span:nth-child(3) {
  flex: 8;
}
```

和原来相比，`flex`实现的栅栏布局优点有两个：

1. 不再局限于 12 列
2. 不再需要计算宽度，也不需考虑宽度浮点数带来的误差

### 必看：flex 的坑

在实现水平垂直居中的过程中，发现了`flex`布局仅仅影响容器的一级子元素。例如下面这段代码：

```html
<html>
  <head>
    <style>
      .level1 {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="level1">
      <div class="level2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  </body>
</html>
```

level2 类就不是水平垂直居中的，因为水平垂直居中仅仅影响到了`level2`，而**不会进一步向下”污染“更深级别的子元素的布局样式**。

如果要让 level2 也实现水平垂直居中，我们可以专门封装一个用于水平垂直居中的类，代码如下：

```html
<html>
  <head>
    <style>
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="level1 center">
      <div class="level2 center">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  </body>
</html>
```

### 参考链接

- [阮一峰的网络日志 Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [菜鸟教程 Flex 布局语法教程](http://www.runoob.com/w3cnote/flex-grammar.html)
