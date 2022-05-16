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