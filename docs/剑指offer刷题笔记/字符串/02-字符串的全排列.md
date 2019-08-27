---
title: "字符串的全排列"
date: "2019-06-23"
permalink: "2019-06-23-str-perm"
comment: false
---

## 1. 题目描述

输入一个字符串，打印出该字符串中字符的所有排列。例如输入字符串 abc，则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba。

## 2. 思路分析

把集合看成 2 个部分，第一部分是第一个元素，第二部分是后面剩余元素。所有字符都要与当前集合的第一个元素交换，交换后的元素是固定的，也就是一种情况。

每次交换，都继续处理后面剩余元素，它们又可以分成 2 部分，和之前讲述的一样。就这样一直递归下去，直到最后一个元素，那么就排出了其中一种情况。所有情况放在一起，就是全排列的结果。

## 3. 代码实现

```javascript
/**
 * 交换数组指定坐标的2个元素
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * 检测arr[start, end)中, 是否有和arr[end]相等的元素
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 */
function check(arr, start, end) {
  for (let i = start; i < end; ++i) {
    if (arr[end] === arr[i]) {
      return false;
    }
  }
  return true;
}

/**
 * 全排列
 * @param {Array} arr 元素集合
 * @param {Number} n 起始位置
 */
function perm(arr = [], n = 0) {
  const length = arr.length;
  if (length === n) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = n; i < length; ++i) {
    if (check(arr, n, i)) {
      swap(arr, n, i);
      perm(arr, n + 1);
      swap(arr, n, i);
    }
  }
}

/**
 * 测试代码
 */
perm(["a", "b", "c"], 0);
console.log("*".repeat(10));
perm(["a", "b", "b"], 0);
```
