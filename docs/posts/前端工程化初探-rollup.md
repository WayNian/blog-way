---
title: 前端工程化初探-使用rollup打包Vue组件库
subtitle: 使用rollup打包Vue组件组
author: waynian
date: 2022-8-22
tags: 
  - 前端工程化
  - 组件库
  - rollup
---


## rollup

### 安装
```shell
  pnpm add rollup -D
```


### 插件
```shell
    #  转换 cjs 语法到 es 给 rollup 使用
    @rollup/plugin-commonjs 
    #  Rollup 查找外部模块
    #  源码与依赖的第三方库进行合并
    #  应该用在其他插件转换你的模块之前 - 这是为了防止其他插件的改变破坏 CommonJS 的检测。
    @rollup/plugin-node-resolve 
    # 编译*.css
    rollup-plugin-postcss
    # 编译*.scss
    rollup-plugin-sass
    # 编译ts
    rollup-plugin-typescript2
    # 编译vue
    rollup-plugin-vue
    # 可替换全局变量
    @rollup/plugin-replace
    # 支持json打包
    @rollup/plugin-json
```

### 配置文件

:::: details 代码
```ts
```
::::