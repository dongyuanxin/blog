---
title: "批量修改log中的提交信息"
date: "2018-06-19"
permalink: "2018-06-19-batch-edit-log"
---

> 事情的起源是这样的：迷恋的谷歌的我最近申请了一个新的 google 邮箱。然后果断在 github 上更新了邮箱地址，并且删除了之前的 163 等国内邮箱。

**回到 github 首页，我发现之前的项目提交记录都没了。**到底什么情况(O_o)??

看一张灾难现场图：

![](https://static.godbmw.com/images/Git/Git修改log中的提交信息/1.png)

仔细查找了相关资料，发现了是因为之前的提交记录中`Author`字段的信息是 163 等国内邮箱的。如下：

![](https://static.godbmw.com/images/Git/Git修改log中的提交信息/2.png)

所以，解决方法就是：**更改`log`中的提交信息**。

### 简单尝试：

通过百度，发现通过如下命令可以修改：

```sh
git commit --amend --author='名称 <邮箱>'
```

但是，这只能修改最近一条。**如何批量修改 log 信息呢？**

### 解决方法

> 通过 google，发现`stackoverflow`上早有人提问，[请移步墙外](https://stackoverflow.com/questions/750172/how-to-change-the-author-and-committer-name-and-e-mail-of-multiple-commits-in-gi?rq=1)。
> 同时，`Github`官方也提供了脚本，虽然仓库没了，但是复制脚本，然后执行即可，[移步这里](https://help.github.com/articles/changing-author-info/)

**首先，我们创建`change.sh`脚本，并根据个人信息复制以下脚本**。

```sh
#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="填写原来的邮箱"
CORRECT_NAME="填写现在的名称"
CORRECT_EMAIL="填写现在的邮箱"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

**将脚本移入要修改的`git`仓库，并执行脚本**。修改后的 log 信息如下。

![](https://static.godbmw.com/images/Git/Git修改log中的提交信息/3.png)

**通过`git push --force`强行推送修改后的 log 信息。**

哈哈，[我的 github](https://github.com/dongyuanxin/markdown-static)又重新绿了起来。
