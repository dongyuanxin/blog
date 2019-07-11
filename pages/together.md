---
title: "参与协作"
permalink: "together"
sidebar: "auto"
single: true
comment: true
---

## 准备工作

请确定本地有 NodeJS V8.x 以上的环境，[>>> 前往下载页面](http://nodejs.cn/download/)。

拉取最新的线上仓库，进入并且安装相关库：

```sh
git clone https://github.com/TencentCloudBase/blog.git
cd blog
npm install
```

启动本地服务器查看效果：

```sh
npm run dev
```

## 文档改动

**此处“改动”指：仅修改文档内容，不修改文档名字，也不改变文档存储位置**。

由于错误或者新的内容更新，会遇到这种情况。修改对应文档的 markdown 文件内容后，在命令行执行：

```sh
npm run lint
```

如果不格式化文章，无法将变动添加到 git 版本库。格式化后，再执行 git 相关操作。

## 文档变动

**此处“变动”指：修改文档名字，或者改变文档位置，或者完全新建文档**。

如果是修改文档名字，或者改变文档位置，并且此文档链接存在于页面上方一级导航栏中 / 某系列左侧导航栏中，请注意同步更新`.vuepress/config/themeConf.js` / `.vuepress/config/sidebar.js` 中的对应字段。

如果是完全新建文档，通过拼接 url 可以访问文档对应页面。此时，如果你想给文档提供入口（例如：页首导航栏、某个系列左侧导航栏），那么需要在 `.vuepress/config/themeConf.js` / `.vuepress/config/sidebar.js` 新建字段。

## 文档展示

如果仅仅是“文档改动”，原文档的链接不会改变，重启服务器，访问原本的 url 即可。

如果是“文档改动”，新文档已经完成打包，可以通过对应的 url 访问。但是不会自动生成入口。固定更新时间是每周的周五和周一，将会统一为新文档提供入口。如果特殊情况，可以在任意页面下评论，并且 at 协作者。

## 文档规范

### 文档位置

如果增加新的文档，可以在`/每周分享/2019/`文件夹下新建，发起 Pull Request。

如果文档较多，可以联系站长，专门规划相关系列。

### FrontMatter

文档的 frontmatter 规范：

```yml
title: "文档标题"
date: "YYYY-MM-DD" # 文档创建日期
permalink: "YYYY-MM-DD-..." # 文档英文标识：日期 + 标题英文
```

下面是一个不错的 demo，你可以在[此页面](https://xin-tan.com/passages/2019-06-23-find-min-num/)查看效果：

```yml
title: "旋转数组最小的数字"
date: "2019-06-23"
permalink: "2019-06-23-find-min-num"
```

::: warning 注意
文章页面的`permalink`属性，会被自动拼接前缀：`passages`，以方面区分
:::

### 静态资源

文档为了明晰说明，常常需要引入图片。**为保证仓库纯净，图片不存放在本仓库，请另行准备图床**。

### 评论设置

默认以 issue 的形式开启评论，通过 FrontMatter 中的`comment`字段来进行控制。

::: tip 建议
推荐开启评论，因为这意味着及时接收反馈，来进一步完善文章
:::

如果你想关闭评论：

```yml
title: "文档标题"
date: "YYYY-MM-DD"
permalink: "YYYY-MM-DD-..."
comment: false # 关闭此页面评论
```

## 添加您的名字

原创声明：欢迎在文章开头和结尾处，介绍你自己，例如：github、个人网站、公众号、职业信息。原则上是：**保持节制** + **互惠共利**。

协作者列表：如果您做过贡献，请联系我将您的信息添加到首页的**协作者列表** / 直接修改`README.md`添加自己的信息。对于以下情况都可以算入：

- 发现文章问题（比如笔误、知识点错误），发起 Pull Request 修改
- 为“每周分享”贡献文章，并且被接受
- 帮助推广，提供有用意见
