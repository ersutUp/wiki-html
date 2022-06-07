# Vue

> 还需要学习：[Vite](https://cn.vitejs.dev/)（构建工具，尤雨溪出品）、组合式API

1. ES6

   1. [ES6中的let与var区别](./demo/01-let-var.html)
   2. [ES6中的常量：const](./demo/02-const.html)
   3. [ES6中的字面量增强写法](./demo/03-literal.html)
   4. [ES6中的高阶函数](./demo/04-higher-order-func.html)
   5. 箭头函数
   6. filter：过滤数据
   7. map：数据加工
   8. reduce：数据汇总
   9. for循环中的of
   10. [ES6的模块化](./ES6/05-module.md)
   11. [ES6的异步处理（Promise）](./ES6/11-Promise.md)

2. [hello world](./demo-cdn/01-helloWorld.html)

3. [列表展示 v-for](./demo-cdn/02-for.html)

4. [计数器(事件监听 v-on)](./demo-cdn/03-计数器.html)

5. [生命周期](./Vue生命周期.md)

6. [mustache语法](./demo-cdn/04-mustache.html)

7. [只渲染一次: v-once](./demo-cdn/05-v-once.html)

8. [html渲染: v-html](./demo-cdn/06-v-html.html)

9. [对内容不做解析: v-pre](./demo-cdn/07-v-pre.html)

10. [斗篷: v-clock](./demo-cdn/08-v-clock.html)

11. [标签属性使用变量：v-bind](./demo-cdn/09-v-bind.html)

12. [v-for、v-bind和v-on结合使用](./demo-cdn/10-example-01.html )

13. [计算属性:computed](./demo-cdn/11-computed.html)

14. [计算属性进阶:computed](./demo-cdn/12-computed-advanced.html)

15. [v-on事件监听的使用](./demo-cdn/13-v-on.html)

16. [v-if、v-else-if、v-else 条件判断的使用](./demo-cdn/14-v-if.html)

17. [v-show的使用](./demo-cdn/15-v-show.html)

18. [v-for遍历循环的使用](./demo-cdn/16-v-for.html)

19. [数组中的响应式（vue3.0以下版本需注意，示例中为 vue3.0）](./demo-cdn/17-array.html)

20. [购物车demo](./demo-cdn/18-shopping-cart.html)
    1. vue3中移除了过滤器，推荐使用计算属性或方法代替

21. [v-model的使用、原理以及修饰符](./demo-cdn/19-v-model.html)

22. [组件化](./demo-cdn/20-component.html)

    1. 全局组件
    2. 局部组件
    3. 组件中使用其他组件
    4. 模板抽离
    5. [组件中name的作用](https://staging-cn.vuejs.org/api/options-misc.html#name)
       1. 注意：在单文件下指定组件名称与文件名不一致时在自己的模板中两个组件名都可以使用，例如文件名为App.vue，name指定为 App1 那么在自己的模板中可以使用 `<App/>`以及`<App1/>`

23. [组件的通信](./demo-cdn/21-component2.html)

    1. 传值
    2. 组件通知上级（自定义事件）

24. [组件的双向绑定](./demo-cdn/22-component3.html)
    1. 手动实现
    2. 通过watch优化
    3. vue3中自带的语法糖

25. [父子组件的访问](./demo-cdn/23-component4.html)
    1. 父访问子组件：
       1. $children（vue3中没有了）
       2. $refs
    2. 子访问父组件：
       1. $parent
          1. 完全访问父组件，因为 $parent 直接拿到了父组件对象

       2. Provide / Inject
          1. 相比 $parent， Provide / Inject对权限可控
    3. 子组件访问根组件：$root

26. [组件的插槽（组件的扩展接口）](./demo-cdn/24-component-slot.html)

    1. 基本使用
    2. 默认值
    3. 具名插槽
       1. v-lost的语法糖 #
    4. 作用域插槽（插槽中使用子组件的值）

27. webpack模块打包工具
    1. [介绍](./webpack/31-webpack-install.md)
    2. [安装](./webpack/31-webpack-install.md#install)
    3. [基本使用与打包](./webpack/31-helloworld.md)
    4. [webpack的配置文件（webpack.config.js）和node的配置文件（package.json）](./webpack/31-config.md)

28. webpack的loader（装载器）

    > loader是打包项目时使用的，他可以解析源文件中的一些特殊语法，比如导入图片、样式，甚至可以转换语言（例如ES6转ES5）

    1. [官方文档](https://webpack.docschina.org/loaders/)
    2. [样式](./webpack/32-loader-style.md)
       1. 加载css文件
       2. 加载less文件
    3. [图片（webpack5+弃用loader使用资源模块）](./webpack/32-asset-module.md)
       1. 编译时图片转换Base64
       2. 编译时图片使用文件（不转换Base64）
       3. 定义打包后图片的名称规则以及打包时进入指定目录
    4. [ES6语法转换ES5语法](./webpack/32-loader-babel.md)

29. [webpack中使用vue](./webpack/33-webpack-vue.md)

30. webpack的插件

    1. [html-webpack-plugin](./webpack/34-plugin-html.md)：将index文件输出到打包目录

31. [webpack的本地服务器](./webpack/35-webpack-server.md)

    1. 修改源码后自动编译

32. [webpack的配置文件分离](./webpack/36-config.md)

33. [vue-CLI3安装和创建项目](./vue-CLI3安装和创建项目.md)

34. [vue的路由安装、模式、简单使用](./vue的路由安装&模式&简单使用.md)

    1. router-link的属性 to、replace、active-class

35. [vue路由的使用](./vue路由的使用.md)

    1. [通过js代码跳转](./vue路由的使用.md)
    1. [动态路由的使用](./vue路由的使用.md#dynamic)
       1. [路由中404页面的处理](./vue路由的使用.md#404)
    1. [路由放入懒加载](./vue路由的使用.md#lazy)
    1. [嵌套路由](./vue路由的使用.md#nesting)
    1. [参数传递](./vue路由的使用.md#query)
       1. 使用props对组件传参解耦
    1. [导航守卫](./vue路由的使用.md#navigation-guards)
       1. [各个导航守卫的顺序](./vue路由的使用.md#navigation-guards-order)
       1. 实例
          1. 不同路由展示不同的title
          1. 登录拦截
    1. [keep-alive](./vue路由的使用.md#keep-alive)
       1. 什么是keep-alive
       1. kepp-alive的生命周期
       1. 路由中使用keep-alive
       1. keep-alive排除/包含组件
       1. keep-alive的最大缓存数

36. [导航栏demo](./scaffolding/40-tabber/README.md)

37. [配置路径别名](./vue-resolve-alias.md)

    1. [vuecli3配置](./vue-resolve-alias.md#vueCli3)

