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

### 动态路由的使用

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