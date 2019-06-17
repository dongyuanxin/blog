---
title: canvas学习和滤镜实现
date: 2018-08-20
permalink: "2018-08-20-canvas-beauty-filter"
---

> 最近学习了 HTML5 中的重头戏--`canvas`。利用 canvas，前端人员可以很轻松地、进行图像处理。其 API 繁多，这次主要学习常用的 API，并且完成以下两个代码：
>
> 1. 实现去色滤镜：
>    ![](https://static.godbmw.com/images/JavaScript/canvas学习和滤镜实现/2.png)
> 2. 实现负色(反色)滤镜
>    ![](https://static.godbmw.com/images/JavaScript/canvas学习和滤镜实现/3.png)

## 1 了解 canvas？

### 1.1 什么是 canvas？

这个 HTML 元素是为了客户端矢量图形而设计的。它自己没有行为，但却把一个绘图 API 展现给客户端 JavaScript 以使脚本能够把想绘制的东西都绘制到一块画布上。

### 1.2 canvas 和 svg、vml 的区别？

`<canvas>` 标记和 SVG 以及 VML 之间的一个重要的不同是，`<canvas>` 有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。

## 2 canvas 绘图学习

大多数 Canvas 绘图 API 都没有定义在 `<canvas>` 元素本身上，而是定义在通过画布的`getContext()`方法获得的一个“绘图环境”对象上。而`<canvas>`元素本身默认的宽高分别是 300px、150px。

### 2.1 canvas 绘制矩形

```javascript
// 处理canvas元素
var c = document.querySelector("#my-canvas");
c.width = 150;
c.height = 70;

// 获取 指定canvas标签 上的context对象
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000"; // 颜色
ctx.fillRect(0, 0, 150, 75); // 形状
```

### 2.2 canvas 绘制路径

```javascript
var c = document.querySelector("#my-canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0); // 开始坐标
ctx.lineTo(200, 100); // 结束坐标
ctx.stroke(); // 立即绘制
```

### 2.3 canvas 绘制圆形

对于`ctx.arc()`这个接口，5 个参数是:`(x,y,r,start,stop)`。其中，x 和 y 是圆心坐标，r 是半径。

而`start`和`stop`的单位是**弧度制**。不是长度，也不是 °。

```javascript
var c = document.querySelector("#my-canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
```

### 2.4 canvas 绘制文字

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
```

## 3 canvas 图像处理学习

### 3.1 常用 API 接口

> 关于图像处理的 API，主要有 4 个：
>
> - 绘制图像： `drawImage(img,x,y,width,height)` 或 `drawImage(img,sx,sy,swidth,sheight,x,y,width,height)`
> - 获取图像数据： `getImageData(x,y,width,height)`
> - 重写图像数据： `putImageData(imgData,x,y[,dirtyX,dirtyY,dirtyWidth,dirtyHeight])`
> - 导出图像： `toDataURL([type, encoderOptions])`

更详细的 API 和参数说明请看：[canvas 图像处理 API 参数讲解](https://www.jb51.net/article/123995.htm)

### 3.2 绘制图像

在此些 API 的基础上，我们就可以在`canvas`元素中绘制我们的图片。假设我们图片是`./img/photo.jpg`。

```javascript
<script>
  window.onload = function () {
    var img = new Image() // 声明新的Image对象
    img.src = "./img/photo.jpg"
    // 图片加载后
    img.onload = function () {
      var canvas = document.querySelector("#my-canvas");
      var ctx = canvas.getContext("2d");

      // 根据image大小，指定canvas大小
      canvas.width = img.width
      canvas.height = img.height

      // 绘制图像
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }
</script>
```

如下图所示，图片被画入了 canvas：
![](https://static.godbmw.com/images/JavaScript/canvas学习和滤镜实现/1.png)

## 4 实现滤镜

> 这里我们主要借用`getImageData`函数，他返回每个像素的 RGBA 值。借助图像处理公式，操作像素进行相应的、数学运算即可。

[什么是 RGBA？](http://www.css88.com/book/css/values/color/rgba.htm)

[更多滤镜实现](https://www.cnblogs.com/st-leslie/p/8317850.html?utm_source=debugrun&utm_medium=referral)

### 4.1 去色效果

去色效果相当于就是老旧相机拍出来的黑白照片。人们根据人眼的敏感程度，给出了如下公式：

`gray = red * 0.3 + green * 0.59 + blue * 0.11`

代码如下：

```javascript
<script>
  window.onload = function () {
    var img = new Image()
    img.src = "./img/photo.jpg"
    img.onload = function () {
      var canvas = document.querySelector("#my-canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // 开始滤镜处理
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imgData.data.length / 4; ++i) {
        var red = imgData.data[i * 4],
          green = imgData.data[i * 4 + 1],
          blue = imgData.data[i * 4 + 2];
        var gray = 0.3 * red + 0.59 * green + 0.11 * blue; // 计算gray
        // 刷新RGB，注意：
        // imgData.data[i * 4 + 3]存放的是alpha，不需要改动
        imgData.data[i * 4] = gray;
        imgData.data[i * 4 + 1] = gray;
        imgData.data[i * 4 + 2] = gray;
      }
      ctx.putImageData(imgData, 0, 0); // 重写图像数据
    }
  }
</script>
```

效果如下图所示：
![](https://static.godbmw.com/images/JavaScript/canvas学习和滤镜实现/2.png)

### 4.2 负色效果

负色效果就是用最大值减去当前值。而 getImageData 获得的 RGB 中的数值理论最大值是：255。所以，公式如下：

`new_val = 255 - val`

代码如下：

```javascript
<script>
  window.onload = function () {
    var img = new Image()
    img.src = "./img/photo.jpg"
    img.onload = function () {
      var canvas = document.querySelector("#my-canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // 开始滤镜处理
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imgData.data.length / 4; ++i) {
        var red = imgData.data[i * 4],
          green = imgData.data[i * 4 + 1],
          blue = imgData.data[i * 4 + 2];
        // 刷新RGB，注意：
        // imgData.data[i * 4 + 3]存放的是alpha，不需要改动
        imgData.data[i * 4] = 255 - imgData.data[i * 4];
        imgData.data[i * 4 + 1] = 255 - imgData.data[i * 4 + 1];
        imgData.data[i * 4 + 2] = 255 - imgData.data[i * 4 + 2];
      }
      ctx.putImageData(imgData, 0, 0); // 重写图像数据
    }
  }
</script>
```

效果图如下：
![](https://static.godbmw.com/images/JavaScript/canvas学习和滤镜实现/3.png)
