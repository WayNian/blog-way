---
title: 前端工程化初探-使用Vite打包Vue组件库
subtitle: 使用Vite打包Vue组件组
author: waynian
date: 2022-8-20
tags: 
  - 前端工程化
  - 组件库
---


## Vite
[`vite`](https://cn.vitejs.dev/guide/)是`vue`团队开发的前端工具链。
- dev模式，使用的是`esbuild`构建
- build的时候，使用的是`rollup`进行打包构建

### 安装

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vite
```

@tab yarn

```bash
yarn create vite
```

@tab npm

```bash
npm create vite@latest
```

:::

### vite配置文件设置
在`vite.config.ts`的`build`中配置`target: "modules"`，设置为库文件打包模式

### 编译vue
`vite`编译`vue`非常简单，直接安装，引入`@vitejs/plugin-vue`即可
```js
...
import vue from "@vitejs/plugin-vue";
...
export default defineConfig({
  plugins: [vue()]
})



```
### 打包scss

### 配置文件
:::: details 代码
```ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: ["src/index.ts"],
      //忽略打包vue文件
      external: ["vue"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "lib",
          preserveModulesRoot: "src",
        },
      ],
    },
  },

  plugins: [
    vue(),
    dts({
      tsConfigFilePath: "./tsconfig.json",
    }),
    dts({
      outputDir: "lib",
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

```
::::