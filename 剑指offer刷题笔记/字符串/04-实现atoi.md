---
title: "实现atoi"
date: "2019-06-23"
permalink: "2019-06-23-str-atoi"
comment: false
---

## 1. 题目描述

请你来实现一个  atoi  函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为  [−2^31,  2^31 − 1]。如果数值超过这个范围，qing 返回  INT_MAX (2^31 − 1) 或  INT_MIN (−2^31) 。

题目来自 [LeetCode](https://leetcode-cn.com/problems/string-to-integer-atoi)，可以直接前往这个网址查看题目各种情况下要求的输出。

## 2. 思路分析

这种题目主要就是考察细心，要主动处理所有情况。所以一步步来即可：

1. 找出第一个非空字符，判断是不是符号或者数字
2. 如果是符号，那么判断正负号
3. 如果符号后面跟的不是数字，那么就是非法的，返回 0
4. 确定连续数字字符的起始边界
5. 计算数字字符的代表的数字大小，并且判断是否越界
6. 返回结果的时候注意符号

## 3. 代码实现

代码通过了 leetcode 的测试，成绩还不错，如下图：

![](https://static.godbmw.com/img/2019-06-23-str-atoi/1.png)

代码如下：

```javascript
const MIN_INT_ABS = Math.pow(2, 31);
const MAX_INT = MIN_INT_ABS - 1;

/**
 * 判断char是否是符号
 * @param {String} char
 */
function isSymbol(char) {
  return char === "-" || char === "+";
}

/**
 * 判断char是否是数字
 * @param {String} char
 */
function isNumber(char) {
  return char >= "0" && char <= "9";
}

/**
 * 模拟atoi(str)
 * @param {String} str
 */
function myAtoi(str) {
  const length = str.length;

  // 找出第一个非空字符，判断是不是符号或者数字
  let firstNotEmptyIndex = 0;
  for (
    ;
    firstNotEmptyIndex < length && str[firstNotEmptyIndex] === " ";
    ++firstNotEmptyIndex
  ) {}
  if (
    !isSymbol(str[firstNotEmptyIndex]) &&
    !isNumber(str[firstNotEmptyIndex])
  ) {
    return 0;
  }

  // 如果是符号，那么判断正负号
  let positive = true,
    firstNumberIndex = firstNotEmptyIndex;
  if (isSymbol(str[firstNotEmptyIndex])) {
    positive = str[firstNotEmptyIndex] === "+";
    firstNumberIndex += 1;
  }

  // 如果符号后面跟的不是数字，那么就是非法的，返回0
  if (!isNumber(str[firstNumberIndex])) {
    return 0;
  }

  // 确定连续数字字符的起始边界
  let endNumberIndex = firstNumberIndex;
  while (endNumberIndex < length && isNumber(str[endNumberIndex + 1])) {
    ++endNumberIndex;
  }

  // 计算数字字符的代表的数字大小
  // 并且判断是否越界
  let result = 0;
  for (let i = firstNumberIndex; i <= endNumberIndex; ++i) {
    result = result * 10 + (str[i] - "0");
    if (positive && result > MAX_INT) {
      return MAX_INT;
    }
    if (!positive && result > MIN_INT_ABS) {
      return -1 * MIN_INT_ABS;
    }
  }

  // 返回的时候注意符号
  return positive ? result : -1 * result;
}

/**
 * 以下是测试代码
 */

console.log(myAtoi(" +1.123sfsdfsd")); // 1
console.log(myAtoi(" -42")); // -42
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
```
