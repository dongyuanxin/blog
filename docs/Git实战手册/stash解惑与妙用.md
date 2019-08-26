---
title: "stash解惑与妙用"
date: "2018-09-07"
permalink: "2018-09-07-git-stash"
---

> 在实际项目开发中，总会遇到代码写到一半（没法去打`commit`），去开启新的分支 修复 Bug 或者 增加功能 的情况。如果不处理，未修改的代码就会被带入临时创建的新的分支，没写完的代码 和 要修复的代码混合在一起，绝对苦逼。而 Git 中的`stash`就是用来对付这种情况。

### 1. 初识`git stash`

`stash`在英文中的意思是：隐藏。在 Git 代码管理的过程中，它的作用也是隐藏没完成的代码，防止它干扰 别人 或者 新分支的工作。

关于`git stash`，常用命令如下：

| 命令                   | 作用                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `git stash`            | 隐藏当前的工作现场, 此时, `git status`的结果是 `clean`     |
| `git stash list`       | 查看所有隐藏, 每一行的冒号前面的字符串就是标识此隐藏的`id` |
| `git stash apply <id>` | 重新显示标识为 id 的隐藏                                   |
| `git stash drop <id>`  | `git apply`恢复隐藏后, 需要手动删除 list 列表中的记录      |
| `git stash pop`        | Apply last stash and remove it from the list               |

### 2. 应用与实战

假设：正当我在 master 分支上写着文档时候（_没有完成、没有提交_），同事发现 `hello.py` 这个脚本有问题，紧急报告给我进行修复。

收到报告，下意识就是开一个 debug 分支来处理 bug。但是，现在的文档没完成，自然无法提交，又不能把没提交的东西带入到新创建的 debug 分支（_执意如此，我也没办法 : \)_）。目前，status 如下：

![](https://static.godbmw.com/images/Git/stash解惑与妙用/1.png)

为了达到目的，分为以下几步：

1. 隐藏修改：`git stash` : ![](https://static.godbmw.com/images/Git/stash解惑与妙用/2.png)
2. 创建新分支：`git branch debug` : ![](https://static.godbmw.com/images/Git/stash解惑与妙用/3.png)
3. 在`debug`分支上修复 bug, 并且将修改添加到 log 中 : ![](https://static.godbmw.com/images/Git/stash解惑与妙用/4.png)
4. 回到`master`分支, 合并`debug`分支的修改, 并且删除 `debug` 分支 : ![](https://static.godbmw.com/images/Git/stash解惑与妙用/5.png)
5. 重新显示隐藏的`stash`，并且将其从`stash list`列表中删除 : ![](https://static.godbmw.com/images/Git/stash解惑与妙用/6.png)
6. **然后就可以愉快地继续做自己的事情啦！**

感谢[chucklu](https://www.cnblogs.com/chucklu/)的提醒：上面第五步的两条命令，可以用`git stash pop`命令代替。

### 3. 拓展阅读

在实际生产过程中，难免会遇到多个 stash 的情况。此时，他们的 id 默认都是：`stash{0}`, `stash{1}`, `stash{2}` ... ...

当我们恢复一个 stash ，并且将它从 stash list 中移除的时候，在其下方的 stash 记录的 id 会自动变小，以保证 id 是从 0 到 n 的连续自然数列。**所以，当从 stash list 移除一个 stash 后，一些 stash 的 id 就会发生改变**。此处是个坑。
