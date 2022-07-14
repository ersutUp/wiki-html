# axios网络请求框架

> [示例项目](./scaffolding/axios-demo)

### 安装

```shell
npm install axios --save
```

### 简单使用

#### GET请求

方式一

```js
  axios({
    url:"http://httpbin.org/get"
  })
  .then(result => {
    console.log("get result",result)
  })
```

方式二

```js
  axios.get("http://httpbin.org/get")
  .then(result => {
    //请求成功处理
    console.log("get result",result)
  })
```

#### POST请求

方式一

```js
  axios({
    url:"http://httpbin.org/post",
    method:"post"
  })
  .then(result => {
    console.log("post result",result)
  })
```

方式二

```js
  axios.post("http://httpbin.org/post")
  .then(result => {
    console.log("post result",result)
  })
```

#### PUT请求

方式一

```js
  axios({
    url:"http://httpbin.org/put",
    method:"put"
  })
  .then(result => {
    console.log("put result",result)
  })
```

方式二

```js
  axios.post("http://httpbin.org/put")
  .then(result => {
    console.log("put result",result)
  })
```

### 请求配置

1. baseURL

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/get"
     })
     .then(result => {
       console.log("get result",result)
     })
   ```

2. 超时时间

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/get",
       timeout: 5000
     })
     .then(result => {
       console.log("get result",result)
     })
   ```

3. 请求方式

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/get",
       method:"get",
       timeout: 5000
     })
     .then(result => {
       console.log("get result",result)
     })
   ```

   注意：不指定请求方式，默认为get请求

4. 参数（query）

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/get",
       method:"get",
       param: {
         type:1,
         name:"haha"
       }
     })
     .then(result => {
       console.log("get result",result)
     })
   ```

   param属性使用json格式指定参数

5. 请求体

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/post",
       method:"post",
       data: {
         name:"ersut"
       }
     })
     .then(result => {
       console.log("post result",result)
     })
   ```

   data属性设置请求体

6. 请求头

   ```js
     axios({
       baseURL:"http://httpbin.org",
       url:"/post",
       method:"post",
       headers:{
         deviceType:"h5"
       }
     })
     .then(result => {
       console.log("post result",result)
     })
   ```

   headers属性添加请求头

### 封装axios

#### 为什么要封装

1. **预防这个框架中途停止更新，当框架出现新bug无人修复，封装后轻松换框架**
2. 设置统一的配置（baseurl、超时时间、固定header头）
3. 当对多个平台发送请求时封装不同的配置

#### 封装示例

##### 封装

```js
import axios from "axios"

export function request(config){
  const myAxios =  axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000
  })

  return myAxios(config)
}
```

##### 使用

```js
<script setup>
import { request } from '@/utils/network/HttpUtil'
import { reactive } from 'vue' 

const data = reactive({
  result:""
})

function postDemo(){
 request({
    url:"/post",
    method: "post",
    params:{
      type:1,
      name:"haha"
    },
    data:{
      page:10,
      pageSize:30
    }
  })
  .then(result => {
    console.log("get result",result)
    data.result = JSON.stringify(result.data.args) + JSON.stringify(result.data.json)
  })
}
</script>
```

### 拦截器

1. 请求拦截

   ```js
   import axios from "axios"
   
   export function request(config){
     const myAxios =  axios.create({
       baseURL: "http://httpbin.org",
       timeout: 5000
     })
     
     //请求拦截器
     myAxios.interceptors.request.use(
       //请求成功
       config => {
         console.info(config)
         return config
       },
       //请求失败
       err => {
         console.error(err)
         //抛出异常 外部的catch才能收到
         throw err
       }
     )
   
     return myAxios(config)
   }
   ```

2. 响应拦截

   ```js
   import axios from "axios"
   
   export function request(config){
     const myAxios =  axios.create({
       baseURL: "http://httpbin.org",
       timeout: 5000
     })
     
     //响应拦截器
     myAxios.interceptors.response.use(
       //响应成功
       res => {
         console.info(res)
         return res
       },
       //响应失败
       err => {
         console.error(err)
         //抛出异常 外部的catch才能收到
         throw err
       }
     )
   
     return myAxios(config)
   }
   ```

   