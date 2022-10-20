---
title: JS导出PDF
subtitle: 使用jspdf库导出PDF
author: waynian
date: 2022-10-20
tags:
  - jsPDF
  - 前端
---

### 安装

```
yarn add jspdf
```

### 使用

这里使用的`canvas`将图片转换成`base64`进行导出

[jspdf文档地址](https://artskydj.github.io/jsPDF/docs/module-addImage.html)

```js
import { jsPDF } from "jspdf";

// landscape：纸张横向
//文档地址 https://artskydj.github.io/jsPDF/docs/module-addImage.html
const pdf = new jsPDF("landscape", "pt", "a3", true);
// 这里的canvas生成已经生成图片了
const pageData = canvas.toDataURL(`image/JPEG`);
// A3纸张的大小，为了让图片(比较大)放在一张图里面，不分页
const A3_WIDTH = 1190.55;
const A3_HEIGHT = 841.89;
// 只处理了一种情况，宽比高长，等比缩放到A3纸的大小
const scale = width / A3_WIDTH;
const h = canvas.height / scale;
// 为了让图片垂直居中(左右两边是充满的) addImage的第三、四个的参数指距离左边和顶部的距离
const marginY = (A3_HEIGHT - h) / 2;
pdf.addImage(pageData, "JPEG", 0, marginY, 1190.55, canvas.height / scale);
pdf.save(`${name}.pdf`);

```
