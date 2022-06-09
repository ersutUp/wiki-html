# ES6的异步处理-Promise

[demo](../demo/11-Promise.html)

### Promise语法

```js
new Promise((resolve,reject)=>{
    
}).then(() => {
    
}).catch(() => {

})
```

Promise内的代码是异步的，`new Promise`后的代码立即执行，不会等待

Promise构造方法中的`resolve`和`reject`是两个函数，调用`resolve()`会进入`then`的函数内，调用`reject()`会进入`catch`的函数内

#### 异步的嵌套

```js
new Promise((resolve,reject)=>{
  resolve()
}).then(() => {
  console.info("第一层-异步成功的处理");
  return new Promise((resolve,reject)=>{
    resolve()
  })
}).then(() => {
  console.info("第二层-异步成功的处理");
}).catch(() => {
  console.info("异步失败统一的处理");
})
```

在`then`中返回一个`Promise`，这个`Promise`调用`resolve()`会进入下一个`then`，这样解决了层层嵌套，代码可读性低的问题。

#### then和catch的传值

```js
new Promise((resolve,reject)=>{
  resolve({msg:"成功"})
  reject({msg:"失败"})
}).then((data) => {
  console.info("异步成功的数据,data:",data);
}).catch((data) => {
  console.info("异步失败的数据,data:",data);
})
```

调用`resolve`、`reject`可以传参数这个参数可以在`then`、`catch`的匿名函数中接收

#### 多线程的情况下等待所有线程执行完成，再处理

```js
Promise.all([
  new Promise((resolve,reject) => {
    setTimeout(() => {
      if(flag){
        resolve(3)
      }else {
        reject(3)
      }
    }, 500);
  }),
  new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(4)
    }, 5000);
  }),
  new Promise((resolve,reject) => {
    setTimeout(() => {
      if(flag){
        resolve(5)
      }else {
        reject(5)
      }
    }, 600);
  }),
]).then((results)=>{
  console.info(results)
}).catch((error)=>{
  console.info(error)
})
```

Promise.all方法可以接收一个为`Promise`的数组，当这个数组内的`Promise`都调用`resolve()`时会进入`then`中；假如有一个调用`reject`立即进入`catch`中，且不等待其他`Promise`执行完成。

`then`的匿名函数中接收一个数组，这个数组中保存着每个`Promise`传过来的数据。

`catch`的匿名函数中接收那个最先调用`reject`所传的值。