---
title: border-sizing属性详解和应用
date: 2018-06-05
permalink: "2018-06-05-border-sizing"
---

> `box-sizing`用于更改用于计算元素宽度和高度的默认的 CSS 盒子模型。它有`content-box`、`border-box`和`inherit`三种取值。`inherit`指的是从父元素继承`box-sizing`表现形式，不再冗赘。

## 1. 属性讲解

#### `content-box`

默认值，也是 css2.1 中的盒子模型。在计算`width`和`height`时候，不计算`border`、`padding`和`margin`。**高度、宽度都只是内容高度**。

#### `border-box`

`css3`新增。 `width`和`height`属性包括内容，内边距和边框，但不包括外边距。

**计算公式：**

1. width = width = border + padding + 内容宽度
2. height = border + padding + 内容高度

## 2. 考虑盒子模型的`margin`

从上面可以知道，即时是`border-box`也是不计算`margin`，只是多余计算了`border`和`padding`。**因为`border`和`padding`都是盒子模型的一部分，但是`margin`标记的是盒子和盒子的间距**。所以，`border-box`的解释很符合常理。

> 问题来了，如果有时候一定要设置`margin`，**怎么做到自由控制来保证兼容**？例如，我们下面要设置一个撑满页面的盒子元素，而且有外边距干扰，怎么做？

实现如下效果图：
![](https://static.godbmw.com/images/CSS/border-sizing属性详解和应用/1.png)

**代码：**[源码下载](https://github.com/dongyuanxin/markdown-static/blob/master/CSS/border-sizing%E5%B1%9E%E6%80%A7%E8%AF%A6%E8%A7%A3%E5%92%8C%E5%BA%94%E7%94%A8/index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>yuanxin.me</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
      }
      #app {
        box-sizing: border-box; /* 指定计算方式 */
        margin: 10px; /* 外边距干扰 */
        /* 利用 css3 的 calc */
        width: calc(100vw - 2 * 10px);
        height: calc(100vh - 2 * 10px);
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

**所以，当需要计算外边距(margin)，可以配合 css3 中的四则运算（`calc`）来使用**。

## 3. 使用建议

> 根据项目中的使用经验和 w3c 的建议，推荐将`box-sizing`属性设置为`border-box`。

```css
* {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
```
