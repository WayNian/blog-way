---
title: vue动态修改placeholder颜色
subtitle: vue动态修改placeholder颜色的几种方式
author: waynian
date: 2022-9-07
tags: 
  - vue3
  - css
---


[测试demo Vitejs - Vite (forked) - StackBlitz](https://stackblitz.com/edit/vitejs-vite-b5tbqf?file=src/App.vue)

- vue3中可以使用v-bind() in CSS

[SFC CSS Features](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css)

```vue
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
```

- vue3中的 CSS Modules应该也能实现

[SFC CSS Features](https://vuejs.org/api/sfc-css-features.html#css-modules)

使用css变量,修改`--placeholder-color`的值即可 
```css
:root{
 --placeholder-color: red;
}

input::-webkit-input-placeholder{
 color: var(--placeholder -color)
}
```

```js
const root = document.querySelector(':root');
root.setAttribute('style', '--placeholder-color: #f1c40f');
// 或者下面这种方式动态修改
root.style.setProperty('--placeholder-color', '#cd0000');
```