---
title: Node同时使用esm和cjs
subtitle: Node环境下，同时使用esm和cjs两种导入方式
author: waynian
cover: https://pic.imgdb.cn/item/5d63838d451253d1785dc22f.png
date: 2022-8-10
tags: 
  - node.js
  - esm
---


> 在使用`commander`和`inquirer`的时候，发现最新版本的`inquirer`不支持`require`的方式，而`commander`还是`require`方式导入，导致在一个js文件中需要同时使用`esm`和`cjs`两种导入方式

### node支持esm
`node` v14版本之后，支持在`package.json`中定义 `"type": "module"`, 即可使用`import`导入。

### 同时支持两种模式
设置`type`为`module`时，之前的`require`写法无法支持，需要使用`createRequire`解决

```js
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const program = require("commander");
import inquirer from "inquirer";
```