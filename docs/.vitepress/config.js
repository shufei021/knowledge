export default {
    title: 'Note', // ← 这就是你看到的 Logo 后的文字
    // 打包目录
    outDir: "../dist",
    /** 打包项目的根目录 */
    base: "/knowledge/",
    themeConfig: {
      nav:[
        // {
        //   text: "首页",
        //   link: "/",
        // },
        // {
        //   text: "前端导航",
        //   link: "/guide/start",
        // },
      ],
      sidebar: {
        '/guide/': [
          {
            text: '浏览器和网络',
            items: [
              { text: '跨域', link: '/guide/a/p1' },
              { text: '事件轮询', link: '/guide/a/p2' },
              { text: '状态码详解', link: '/guide/a/p3' },
              { text: 'websoket', link: '/guide/a/p4' },
              { text: 'options 预检机制', link: '/guide/a/p5' },
              { text: 'HTTP1.1和HTTP2的区别', link: '/guide/a/p6' },
              { text: '浏览器输入URL到渲染的过程', link: '/guide/a/p7' },
            ]
          },
          {
            text: '性能优化',
            items: [
              { text: '前端缓存', link: '/guide/b/p1' },
              { text: '前端性能优化', link: '/guide/b/p2' },
              { text: '前端首屏优化', link: '/guide/b/p3' },
              { text: '前端内存泄漏', link: '/guide/b/p4' },
              { text: '如何优化SEO', link: '/guide/b/p5' },
            ]
          },
          {
            text: 'JavaScript 核心',
            items: [
              { text: 'ES6 特性', link: '/guide/c/p1' },
              { text: '函数柯里化', link: '/guide/c/p2' },
              { text: '原型和原型链', link: '/guide/c/p3' },
              { text: 'CommonJS和模块化', link: '/guide/c/p4' },
              { text: '箭头函数和普通函数的区别', link: '/guide/c/p5' },
              { text: 'requestAnimationFrame', link: '/guide/c/p6' },
              
            ]
          },
          {
            text: 'Vue 框架',
            items: [
              { text: 'Vue的生命周期', link: '/guide/d/p1' },
              { text: 'Vue2和Vue3的区别', link: '/guide/d/p2' },
              { text: 'Vue3的组件通信', link: '/guide/d/p3' },
              { text: 'Vue的nextTick', link: '/guide/d/p4' },
              { text: 'Vue的key的作用', link: '/guide/d/p5' },
              { text: 'Vue的diff算法', link: '/guide/d/p6' },
              { text: 'Vue的自定义指令', link: '/guide/d/p7' },
              { text: 'Vue如何优化SEO', link: '/guide/d/p8' },
              { text: 'Vue的v-model原理', link: '/guide/d/p9' },
              { text: 'Vue的双向绑定原理', link: '/guide/d/p10' },
              { text: 'Vue的路由实现原理', link: '/guide/d/p11' },
              { text: 'Vue的响应式原理', link: '/guide/d/p18' },
              { text: 'Vue的computed原理', link: '/guide/d/p12' },
              { text: 'Vue的keep-alive原理', link: '/guide/d/p13' },
              { text: 'Vue的SSR和SSG原理', link: '/guide/d/p14' },
              { text: 'Vue的ref和reactive区别', link: '/guide/d/p15' },
              { text: 'Vue的toRefs和toRow区别', link: '/guide/d/p16' },
              { text: 'Vue的watch和watchEffect区别', link: '/guide/d/p17' },
            ]
          },
          {
            text: '样式和布局',
            items: [
              { text: 'flex', link: '/guide/e/p1' },
              { text: 'BFC', link: '/guide/e/p2' },
              { text: '1px问题', link: '/guide/e/p3' },
              { text: '重绘和回流', link: '/guide/e/p4' },
              { text: '移动端适配', link: '/guide/e/p5' },
              { text: '数据大屏适配', link: '/guide/e/p6' },
            ]
          },
          {
            text: '构建及工程化',
            items: [
              { text: 'webpack的构建流程', link: '/guide/f/p1' },
              { text: 'vite的构建流程', link: '/guide/f/p2' },
              { text: 'webpack 和 vite 的区别', link: '/guide/f/p3' },
              { text: 'TypeScript', link: '/guide/f/p4' },
              { text: 'uniapp', link: '/guide/f/p5' },
              { text: '前端架构', link: '/guide/f/p6' },
              { text: '微前端', link: '/guide/f/p7' },
            ]
          },
        ]
      }
    }
}