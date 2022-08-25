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

### 安装

### 解析vue

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
      //忽略打包vue文件
      external: ["vue"],
      input: ["src/index.ts"],
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