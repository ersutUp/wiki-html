# vue路由的使用

### 通过js代码跳转

vue提供了`this.$router`与创建的路由完全相同，可以通过`this.$router`的push方法与replace方法进行跳转

#### push方法

在历史记录中推送一个链接，并从路由中获取对应的组件进行加载

示例：

```js
methods:{
  pushMeth(){
    this.$router.push("/home")
  }
}
```

#### replace方法

在历史记录中推送一个链接，并从路由中获取对应的组件进行加载

示例：

```js
methods:{
  replaceMeth(){
    this.$router.replace("/home")
  }
}
```



[示例代码](./scaffolding/39-router-use/src/views/method-jump.vue)

### <div id="dynamic"></div>动态路由的使用

#### 参数定义

在路由映射关系的path中的定义参数，格式为`:参数名`，例如参数名为id那么就是`:id`

```js

let router = createRouter({
  ...
  //映射关系
  routes: [
      {
        //:id 代表动态路由中的id参数
        path: "/dynamic-route/:id",
        component: dynamicRoute
      }
    ]
  ...
})
```

[示例代码](./scaffolding/39-router-use/src/router/index.js)

#### 参数接受

vue提供了`this.$route`代表当前展示的路由，可以用来获取参数等

在对应的组件中，通过`this.$route.params.id`来获取id参数

```js
export default {
  computed:{
    id(){
      return this.$route.params.id
    }
  }
}
```

[示例代码](./scaffolding/39-router-use/src/views/dynamic-route.vue)

#### 参数传递

router-link示例：

```html
<template>
  <router-link :to="'/dynamic-route/'+id">动态路由</router-link>
</template>
<script>
export default {
  data(){
    return{
      id: 123
    }
  }
}
</script>
```

[示例代码](./scaffolding/39-router-use/src/App.vue)

### <div id="lazy"></div>路由的懒加载

#### 懒加载的作用

vue打包时会将所有组件放在一个js中，随着业务的增长组件越来越多，这个js文件会越来越大，这样会导致浏览器在加载这个js时时间变长，页面出现短暂的空白，体验极差，这时后就需要懒加载将组件剥离开分成多个js文件，来解决这个问题。

路由的懒加载最终可以将一个组件或或者多个组件加载到一个独立的js文件中，在使用到对应组件是才加载js。

#### 懒加载写法

```js

const routerLazy = () => import("@/views/router-lazy")

//路由的映射关系
let routes = [
  {
    path: "/lazy-router",
    //路由的懒加载
    component: routerLazy
  },
]

//创建路由
let router = createRouter({
  //映射关系
  routes,
})
```

#### 懒加载请求分析

##### 打包文件分析

![](./images/router-lazy.png)

可以看到多出来两套文件 这是使用了两个懒加载的路由

##### 请求分析

<img src="./images/router-lazy-request.png" style="zoom:67%;" />

在请求首页时只加载了必要文件，当请求懒加载路由时请求了对应的js

[示例代码](./scaffolding/39-router-use/src/router/index.js)



### <div id="nesting"></div>嵌套路由

#### 适用场景

- 手机端的底部导航，点击不同导航显示不同的页面

#### 语法

router/index.js

```js
const nesting = () => import("@/views/nesting-router")
const nestingNews = () => import("@/views/nesting-router-news")
const nestingMessage = () => import("@/views/nesting-router-message")

//路由的映射关系
let routes = [
  {
    path:"/nesting-router",
    component: nesting,
    //嵌套路由
    children:[
      {
        //默认展示 nestingNews 组件
        path:"",
        redirect:"/nesting-router/news"
      },
      {
        path:"news",
        component: nestingNews
      },
      {
        path:"msg",
        component: nestingMessage
      },
    ]
  }
]

//创建路由
let router = createRouter({
  //映射关系
  routes,
})
```

#### 截图示例

![](./images/router-nesting.png)

[示例代码](./scaffolding/39-router-use/src/router/index.js)