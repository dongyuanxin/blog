---
title: "标签应用和版本管理"
date: "2018-09-06"
permalink: "2018-09-06-git-tag-and-version"
---

> 当一个代码仓库进过长时间的迭代，针对不同的时期和需求，必定会有不同的版本。而借助 Git 提供的标签功能，可以快捷方便地记录代码版本。无论什么时候，想取回某个版本，不再需要查找冗长的`commit_id`，只需要取出打标签的历史版本即可。

可以这么理解：**标签是版本库的一个快照**。在主流的 Git 平台上，版本可以直接下载的，节省了开发者的不少精力。

下面记录下如何借助 标签 进行版本管理。

### 1. 环境仿真

首先我在 github 上建立了一个仓库。如你所见，这是一个全新仓库：[>>> Star now](https://github.com/dongyuanxin/git-demos)

![](https://static.godbmw.com/images/Git/标签应用和版本管理/1.png)

执行`git clone git@github.com:dongyuanxin/git-demos.git`, 将代码库 clone 到本地后。

在根目录下创建一个`hello.v1.py`文件：`touch hello.v1.py`。代码如下：

```python
# hello.v1.py
print("This is version 1.0")
```

### 2. 本地标签操作

下面记录了本地标签操作的常用命令：

| 命令                                | 作用                            |
| ----------------------------------- | ------------------------------- |
| `git tag`                           | 查看所有标签                    |
| `git tag <tagname>`                 | 创建标签：tagname               |
| `git tag -a <tagname> -m <comment>` | 为标签 tagname 增加说明 comment |
| `git show <tagname>`                | 查看标签：tagname 的内容        |
| `git tag -d <tagname>`              | 删除标签：tagname               |

其中，创建标签 tagname 并且增加说明 comment，可以简写成：`git tag <tagname> -m <comment>`

Now, 为代码库在本地打上标签：`git tag v1.0.0 -m 'v1.0.0正式版本'`。

### 3. 标签的远程推送和拉取

在本地打好标签后，需要将标签推送到 Git 平台（比如 GitHub）上，才能留下版本快照，供别人下载使用。

除此之外，还有可能删除已经发布的标签（比如标签命名不合规范）。

下面记录了远程标签操作的常用命令：

| 命令                        | 作用         |
| --------------------------- | ------------ |
| `git push origin --tags`    | 推送所有标签 |
| `git push origin <tagname>` | 推送指定标签 |

我们首先将`v1.0.0`版本推送到 Github：`git push origin v1.0.0`

然后，打开仓库，我们会发现`releases`标签已经变成了 1。
![](https://static.godbmw.com/images/Git/标签应用和版本管理/2.png)

点进去，会发现我们可以直接下载`v1.0.0`版本。所以，标签是版本的快照。
![](https://static.godbmw.com/images/Git/标签应用和版本管理/3.png)

值得一提的是：**标签会随着`git clone`仓库时候，自动拉取到本地**。不信的话可以 clone 一下这个代码仓库，查看是不是已经有了`v1.0.0`这个标签。

### 4. 标签的删除

标签的删除请慎重，尤其是删除远程标签（_一般来说，没有人会这么做_）。命令如下：

| 命令                                   | 作用         |
| -------------------------------------- | ------------ |
| `git tag -d <tagname>`                 | 删除指定标签 |
| `git push origin :refs/tags/<tagname>` | 删除远程标签 |

### 5. 拓展阅读

版本管理可以借助 git 的 tag 来实现。但是，在开发过程中，不可能每次修改都打标签然后发布。

实际开发中，一般会有一个`dev`分支，作为开发版本分支。在没有完成此次开发任务前，所有的代码都是合并到`dev`分支。

当完成了开发任务，管理者会将`dev`分支合并到`master`分支，然后删除`dev`分支，并且通过打标签来发布版本。

这就是为什么很多放弃维护的大型开源项目只有`master`分支的原因。
