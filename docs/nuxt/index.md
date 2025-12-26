# Nuxt

[Nuxt.js 官方文档](https://nuxt.com/)

## 什么是 SSR

> 服务器端渲染（Server-Side Rendering）是指由服务端完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。
简单理解就是`html`是由服务端写出，可以动态改变页面内容，即所谓的动态页面。早年的 php、asp 、jsp 这些 Server page 都是 SSR 的。

## 为什么使用 SSR
> 网页内容在服务器端渲染完成，一次性传输到浏览器，所以 首屏加载速度非常快；
有利于SEO，因为服务器返回的是一个完整的 html，在浏览器可以看到完整的 dom，对于爬虫、百度搜索等引擎就比较友好；

## Nuxt 是什么
> **Nuxt 是一个基于 Vue.js 的服务端渲染应用框架，如同 next 对于 react 一般**

## 创建 Nuxt 项目

**从头开始新建项目**

```bash
mkdir <项目名>
cd <项目名>
```
> 提示: 将 <项目名> 替换成为你想创建的实际项目名。

新建 package.json 文件

package.json 文件用来设定如何运行 nuxt：

```bash
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt"
  }
}
```
上面的配置使得我们可以通过运行 npm run dev 来运行 nuxt

### 安装 nuxt

一旦 package.json 创建好， 可以通过以下 npm 命令将 nuxt 安装至项目中：

```bash
npm install --save nuxt
```

### pages 目录

> Nuxt.js 会依据 pages 目录中的所有 *.vue 文件生成应用的路由配置。

创建 pages 目录：
```bash
mkdir pages
```

创建我们的第一个页面 pages/index.vue：

```vue
<template>
  <h1>Hello world!</h1>
</template>
```

然后启动项目：

```bash
npm run dev
```

现在我们的应用运行在 http://localhost:3000 上运行。

> 注意：Nuxt.js 会监听 pages 目录中的文件更改，因此在添加新页面时无需重新启动应用程序。

[更多目录结构](https://www.nuxtjs.cn/guide/directory-structure)