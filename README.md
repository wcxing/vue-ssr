# vue2-elm-ssr

> Nuxt.js project

##### 服务端渲染的优势
与传统 SPA（Single-Page Application - 单页应用程序）相比，服务器端渲染(SSR)的优势主要在于：
-  SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。

    请注意，截至目前，Google 和 Bing 可以很好对同步 JavaScript 应用程序进行索引。在这里，同步是关键。如果你的应用程序初始展示 loading 菊花图，然后通过 Ajax 获取内容，抓取工具并不会等待异步完成后再行抓取页面内容。也就是说，如果 SEO 对你的站点至关重要，而你的页面又是异步获取内容，则你可能需要服务器端渲染(SSR)解决此问题

- 更快的内容到达时间(time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content)与转化率直接相关」的应用程序而言，服务器端渲染(SSR)至关重要。 

##### 本项目基于[vue2-elm](https://github.com/bailicangdu/vue2-elm)（github上的vue技术栈项目，非常适合有些vue基础的去学习和参考）。本人最近在看服务端渲染的东西。想找个现成的项目拿来做下尝试，我初学vue的时候就是参考的这个项目，对这个项目比较熟悉于是就借用这个项目的代码来做尝试
##### 关于vue服务端渲染，官网这样描述：
>  从头搭建一个服务端渲染的应用是相当复杂的。幸运的是，我们有一个优秀的社区项目 Nuxt.js 让这一切变得非常简单。

##### 这此尝试就是用nuxt.js框架。从开始阅读文档到渲染出首页用时不到一天半。可见nuxt框架还是比较容易上手的。时间原因只做了首页的渲染，后续有时间会慢慢完善。

##### 项目技术栈：
- nuxt.js（Nuxt 是一个基于 Vue 生态的更高层的框架，为开发服务端渲染的 Vue 应用提供了极其便利的开发体验）
- vue
- vuex
- vue-router
- vuex
- es6
- webpack
#####          

##### 项目运行
1. gitclone以后，进入项目根目录，执行 npm install 安装项目依赖
```
npm install
```
2. 运行 npm run dev 启动项目
```
npm run dev
```
应用现在运行在 http://localhost:3000
