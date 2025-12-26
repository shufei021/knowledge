# 面试题



## 1. HTML 的 head 里面都有哪些东西？

`<head>` 标签位于 HTML 文档的头部，用于包含不直接显示在页面上的元数据（metadata）。常见的内容包括：

- `<title>`：网页标题，显示在浏览器标签页上
- `<meta>`：定义页面的元信息，如字符集、视口设置、描述、关键词等
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="这是一个商品详情页">
  ```
- `<link>`：引入外部资源，如样式表、图标等
  ```html
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico">
  ```
- `<script>`：引入 JavaScript 文件或内联脚本
  ```html
  <script src="main.js"></script>
  ```
- `<base>`：设置页面中所有相对 URL 的基准路径
- `<style>`：内联 CSS 样式
- `<noscript>`：当浏览器禁用 JavaScript 时显示的内容
- `<manifest>`：用于 PWA 应用的 manifest 文件

## 2. 怎么隐藏一个元素？

有多种方式可以隐藏一个元素，常用的方法如下：

### CSS 方式
- `display: none;`：完全隐藏元素，不占据空间
- `visibility: hidden;`：隐藏元素但保留其占据的空间
- `opacity: 0;`：透明度为 0，仍占据空间且可交互（如点击）
- `position: absolute;`：绝对定位，脱离文档流，不占据空间

### JavaScript 方式
```javascript
element.style.display = 'none'; // 完全隐藏
element.style.visibility = 'hidden'; // 隐藏但占位
element.style.opacity = '0'; // 透明
```

### Vue 中
```vue
<div v-show="false">隐藏内容</div> <!-- 使用 v-show 控制显示/隐藏 -->
<div v-if="false">条件渲染隐藏</div> <!-- 条件渲染，不渲染到 DOM -->
```

## 3. 比如一个商品的商品详情，有很多图片，大的小的，都是服务端下发的 HTML 片段。这个时候怎么保证图片不超出边界，又显示不变形？

### 解决方案：

1. **设置容器宽高 + 图片自适应**
   给图片父容器设置固定宽高，图片使用 max-width: 100%; height: auto; 自适应。
   ```css
   .image-container {
     width: 300px;
     height: 200px;
     overflow: hidden;
   }
   .image-container img {
     width: 100%;
     height: 100%;
     object-fit: cover; /* 或 contain */
   }
   ```

2. **使用 object-fit 属性**
   - cover：保持比例，填充整个容器，可能裁剪
   - contain：保持比例，完整显示，可能留白

3. **动态处理图片尺寸**
   在前端解析 HTML 片段后，通过 JS 动态设置图片大小或添加样式类

4. **使用 img 的 loading="lazy" 减少首屏压力**
   对非首屏图片延迟加载

5. **预设最大尺寸限制**
   服务端返回图片时，建议压缩并提供多个尺寸，前端根据屏幕选择合适尺寸

## 4. 事件冒泡是什么意思？Vue 项目中怎么防止冒泡？有哪些方式？

### 事件冒泡含义：
事件冒泡是指事件从最内层的元素开始触发，逐级向上传播到父元素的过程。例如点击按钮时，会依次触发按钮、父容器、body 等的事件。

### Vue 中防止冒泡的方式：
1. **修饰符 stop**
   ```vue
   <button @click.stop="handleClick">点击我</button>
   ```

2. **原生事件阻止**
   ```javascript
   handleClick(event) {
     event.stopPropagation();
   }
   ```

3. **使用 @click.prevent.stop 同时阻止默认行为和冒泡**

4. **在组件中使用 v-on:click.native.stop**（针对原生事件）

## 5. Vue2 和 Vue3，你觉得使用上有哪些区别？

| 方面 | Vue2 | Vue3 |
|------|------|------|
| 响应式系统 | 基于 Object.defineProperty | 基于 Proxy，支持数组和对象深层次监听 |
| Composition API | 不支持 | 支持（setup()、ref、reactive） |
| 模板语法 | 基于选项式 API（Options API） | 支持 Options API 和 Composition API |
| 性能 | 较慢，尤其是大型应用 | 更快，更小体积 |
| Teleport / Suspense | 无 | 支持（跨组件挂载、异步组件加载） |
| TypeScript 支持 | 有限 | 更好，原生支持 |
| Fragment | 不支持 | 支持（多个根节点） |
| Custom Renderer | 不支持 | 支持 |

## 6. 说一说 Vue3 的生命周期，销毁周期我们主要做什么事情？不做这些事情会怎么样？

### Vue3 生命周期钩子（组合式 API）：
- `onBeforeMount`：挂载前
- `onMounted`：挂载完成后
- `onBeforeUpdate`：更新前
- `onUpdated`：更新后
- `onBeforeUnmount`：卸载前
- `onUnmounted`：卸载完成

### 销毁周期（onBeforeUnmount / onUnmounted）主要做：
1. **清理定时器**
   ```javascript
   let timer = setInterval(() => {}, 1000);
   onBeforeUnmount(() => clearInterval(timer));
   ```

2. **取消网络请求**
   ```javascript
   const cancelToken = axios.CancelToken.source();
   onBeforeUnmount(() => cancelToken.cancel());
   ```

3. **解绑事件监听器**
   ```javascript
   window.addEventListener('resize', handleResize);
   onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
   ```

4. **释放订阅或 WebSocket 连接**

### 如果不做这些清理：
- 内存泄漏（定时器持续运行）
- 请求重复发送
- 事件监听堆积
- 页面卡顿、性能下降

## 7. 不同的二级域名，页面皮肤可能是不同的，你有哪些实现方案？

### 方案一：通过 Cookie / localStorage 判断
用户登录时记录偏好皮肤
页面加载时读取并应用对应 CSS 类或主题

### 方案二：URL 参数传递
如 ?theme=dark
页面根据参数动态加载不同 CSS 文件

### 方案三：域名映射 + CDN 配置
不同二级域名指向不同静态资源目录
如 shop.example.com → skin/shop.css

### 方案四：前端判断域名，动态加载样式
```javascript
const domain = window.location.hostname;
if (domain.includes('mobile')) {
  import('./themes/mobile.css');
} else if (domain.includes('pc')) {
  import('./themes/pc.css');
}
```

### 方案五：SSR 渲染时注入主题
服务端根据域名生成不同 HTML，嵌入对应 `<link>` 标签

## 8. 对于跨域，你都遇到过得，和没遇到过的，都可以。有哪些情况会发生跨域的情况，解决方案是什么？

### 常见跨域场景：
- AJAX 请求其他域名接口
- 跨域 iframe 加载
- Web Fonts、CSS、JS 文件来自不同域名
- WebSocket 跨域连接

### CORS（跨域资源共享）
服务器设置响应头：
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
```

### JSONP（仅支持 GET）
通过 `<script>` 动态加载远程脚本

### 代理服务器
前端请求代理到后端，后端再请求目标接口
Nginx、Express、Webpack Dev Server 都支持

### CORS 与 JSONP 区别：
- CORS 支持所有方法，安全
- JSONP 只支持 GET，存在 XSS 风险

### 注意事项：
浏览器同源策略只影响客户端脚本访问，不影响静态资源加载（如图片、CSS）
跨域不是 HTTPS 和 HTTP 之间的区别，而是协议+域名+端口三者一致才同源

## 9. 现在手机拍照，图片都挺大的，对服务器有压力。我们可以有哪些手段降低压力？

### 前端优化：
1. **压缩图片**
   使用 canvas.toDataURL() 压缩为 base64 并调整质量
   ```javascript
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   canvas.width = 800;
   canvas.height = 600;
   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
   const dataUrl = canvas.toDataURL('image/jpeg', 0.8); // 质量 80%
   ```

2. **上传前预览并提示用户**
   提示用户是否需要压缩

3. **使用 FileReader + Image 对象检测尺寸**

### 后端优化：
1. **图片存储分层**
   存储原始图 + 缩略图（如 300x300、800x600）

2. **CDN 分发**
   将图片放在 CDN 上，加速访问

3. **懒加载 + 分片上传**
   大文件分片上传，失败重试

4. **使用云服务自动压缩**
   如阿里云 OSS 图片处理功能

## 10. 有一个大图片总是加载的很慢，你有哪些方案可以让它加载的快一些？

1. **懒加载（Lazy Load）**
   图片不在视口内时不加载，滚动到时再加载
   ```html
   <img src="placeholder.jpg" data-src="large.jpg" class="lazy">
   ```
   使用 Intersection Observer 实现

2. **使用 srcset 和 sizes 实现响应式图片**
   ```html
   <img srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
        sizes="(max-width: 600px) 400px, 800px"
        src="medium.jpg">
   ```

3. **WebP 格式替代 JPEG/PNG**
   WebP 压缩率更高，体积更小

4. **CDN 加速**
   将图片部署到 CDN，就近访问

5. **预加载关键图片**
   ```html
   <link rel="preload" href="key-image.jpg" as="image">
   ```

6. **使用 picture 标签选择最佳格式**
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="图片">
   </picture>
   ```

7. **图片分块加载（如渐进式 JPEG）**
   浏览器先加载低分辨率版本，再逐步清晰

## 11. 我们往外分享一个商品详情页。说一说，你该怎么做这件事？

### 目标：
让用户能方便地分享商品详情页，并确保分享内容美观、有效

### 步骤：

1. **生成分享链接**
   保证链接唯一且稳定（如 /product/123）
   添加追踪参数（如 utm_source=wechat）

2. **生成分享卡片（Open Graph / Twitter Cards）**
   在 `<head>` 中添加 meta 标签：
   ```html
   <meta property="og:title" content="商品名称">
   <meta property="og:description" content="商品简介">
   <meta property="og:image" content="https://example.com/image.jpg">
   <meta property="og:url" content="https://example.com/product/123">
   ```

3. **支持微信、微博等平台分享**
   - 微信：需配置公众号或小程序，支持 JS-SDK
   - 微博：调用官方分享接口

4. **提供"复制链接"按钮**
   使用 navigator.clipboard.writeText()
   ```javascript
   navigator.clipboard.writeText(window.location.href);
   ```

5. **生成二维码（可选）**
   用户扫码直达商品页

6. **分享后跳转或提示**
   分享成功后提示"已分享"，避免重复操作

7. **A/B 测试分享按钮位置和文案**
   提升分享转化率