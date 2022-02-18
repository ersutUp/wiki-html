# ES6的模块化

### 没有模块化带来的问题

**不同js文件内的变量名发生冲突时，代码可能不会按预想的方式运行，尤其是在代码量较大的情况下排查更麻烦**

html部分：

```html
<body>
  <h1>看控制台</h1>
  <script>
    var flag = true
  </script>
  <script src="./js/non-module-1.js"></script>
  <script src="./js/non-module-2.js"></script>
</body>
```

non-module-1.js

```js
var flag = true
if(flag){
  console.log("我是non-module-1.js")
}
flag = false
```

non-module-2.js

```js
if(flag){
  console.log("我是non-module-2.js")
}
```

non-module-2.js 中是想使用 html 中的 flag ， 从而打印出`我是non-module-2.js`

但是由于 non-module-1.js 中也定义了 flag 并且最后设置为 false 所以 non-module-2.js 中使用的是这个falg

最终只打印了 `我是non-module-1.js`

[源代码](../demo/05-non-module.html)

### 模块化的使用

#### 模块化的定义

#### 模块化的导出

#### 模块化的导入



