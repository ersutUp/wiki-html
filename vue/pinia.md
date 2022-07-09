# pinia

## 什么是pinia

状态（共享变量）的统一管理，可以理解为单例模式中管理变量、多组件之间可共用的变量

pinia中管理里数据是响应式的

## 适用场景：多页面中都需要用到的数据

- 登录token
- 登录状态
- 用户基础信息

## 安装

node中安装

```shell
npm install pinia --save
```

vue中配置

```js
 import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

const pinia = createPinia()

createApp(App)
.use(pinia)
.mount('#app')
```



## 简单示例

定义store

```js
import { defineStore } from "pinia";

//定义store，第一个参数是store的唯一名称，第二个参数放store的选项
export const userStore = defineStore('user',{
  //定义状态的位置
  state: () =>{
    return {
      //此处状态的值无需 ref，因为pinia会自动将值包装成 ref
      name: 'ersut',
      hobbys:["自行车","篮球","爬山"],
      newHobbyNum: 0
    }
  }
})
```

使用store

```vue
<template>
<div>
  名字:
  <span>{{name}}</span>
</div>
</template>

<script setup>
import { userStore } from '@/store/user'
const store = userStore()
const {name} = store
</script>
```

## 状态

### 获取

```vue
<template>
<div>
  名字:
  <span>{{name}}</span>
</div>
</template>

<script setup>
import { userStore } from '@/store/user'
const store = userStore()
const {name} = store
</script>
```

### 修改

```vue
<template>
<div>
  <label for="name">名字</label>
  <!-- 通过双向绑定修改值 -->
  <input type="text" id="name" v-model="name"/>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/store/user'
const store = userStore()
//通过storeToRefs获取ref类型，非ref包装的值无法实现响应式
const {name} = storeToRefs(store)
</script>
```

### 重置为初始值

```vue
<template>
<div>
  <button @click="reset">重置</button>
</div>
<div>
  <label for="name">名字</label>
  <!-- 通过双向绑定修改值 -->
  <input type="text" id="name" v-model="name"/>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/store/user'
const store = userStore()
//通过storeToRefs获取ref类型，非ref包装的值无法实现响应式
const {name} = storeToRefs(store)

function reset(){
  //将所有状态重置为初始值
  store.$reset()
}
</script>
```

通过`store.$reset()`可以将所有`state`重置为初始值

### 批量更新状态

```vue
<template>
<div>
  <span>爱好:</span>
  <div v-for="(item,index) in hobbys">
    {{item}}
    <span @click="hobbyDel(index)">×</span>
  </div>
  <input type="text" v-model="data.newHobby"/>
  <button @click="addHobby">新增</button>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { userStore } from '@/store/user'

const data = reactive({
  newHobby: ""
})
    
const store = userStore()
//通过storeToRefs获取ref类型，非ref包装的值无法实现响应式
const {newHobbyNum,hobbys} = storeToRefs(store)

function hobbyDel(index){
  hobbys.value.splice(index,1)
}

function addHobby(){
  //批量更新state
  store.$patch((state) =>{
    state.hobbys.push(data.newHobby)
    state.newHobbyNum++
  })
  data.newHobby = ""
}

</script>
```

通过给`store.$patch`传一个函数，函数中接收一个参数，这个参数就是当前`store`的`state`，通过`state`批量更新

### 状态订阅

```js
import { userStore } from "@/store/user"
const useUserStore = userStore()
//状态的订阅
useUserStore.$subscribe((mutation, state) => {
  /*
  mutation.storeId : store的id
  mutation.type : 通过哪种方式修改的，有三个值 
                  'direct': 通过 action 修改的 或直接修改的 state
                  'patch object': 通过 $patch 传递对象的方式修改的
                  'patch function': 通过 $patch 传递函数的方式修改的
  mutation.events : 当前发生改变的state,不好使不要用（截止2.0.14版本）
  mutation.payload: 仅当 mutation.type == 'patch object' 时才有此参数，其值为 $patch 传递的对象
  */
  console.log("mutation",mutation)

  //store中的state
  console.log("state",state)
})
```

当`state`发生改变时会触发对应`store`的所有订阅（订阅可以有多个）

## getter：类似计算属性

getter主要负责对state中的数据进行加工

### getter的基本使用

#### getter的定义

```js
import { defineStore } from "pinia";
export const userStore = defineStore('user',{
  state: () =>{
    return {
      surname: 'wang',
      name: 'ersut',
      hobbys:["自行车","篮球","爬山"],
      newHobbyNum: 0
    }
  },
  //对状态的加工，但不修改值，不支持异步
  getters:{
    //拼接全民
    fullName: (state) => {
      return state.surname + state.name
    }
  }
})
```

#### getter的使用

```vue
<template>
<div>
  <span>姓名:</span>
  <span>{{fullName}}</span>
</div>
</template>

<script setup>
import { userStore } from '@/store/user'
const {fullName} = userStore()
</script>
```

### getter接收参数

#### 定义接收参数的getter

通过`return`中返回的函数来接受参数

```js
import { defineStore } from "pinia";
export const userStore = defineStore('user',{
  state: () =>{
    return {
      surname: 'wang',
      name: 'ersut',
      hobbys:["自行车","篮球","爬山"],
      newHobbyNum: 0
    }
  },
  //对状态的加工，但不修改值，不支持异步
  getters:{
    //拼接全民
    fullName: (state) => {
      return state.surname + state.name
    },
    //getter接收参数
    showHobbys: (state) => {
      return (num) => state.hobbys.slice(0,num).join(",")
    }
  }
})
```

#### 带参数的使用

```vue
<template>
<div>
  <span>姓名:</span>
  <span>{{fullName}}</span>
</div>
<div>
  <span>前二爱好:</span>
  <!-- 传递参数 -->
  <span>{{showHobbys(2)}}</span>
</div>
</template>

<script setup>
import { userStore } from '@/store/user'
const {fullName,showHobbys} = userStore()
</script>
```

## action(行动)：类似component的method

主要用来对state值的逻辑处理和值的修改,`action`支持异步

### action的定义

```js
import { defineStore } from "pinia";

//定义store，第一个参数是store的唯一名称，第二个参数放store的选项
export const userStore = defineStore('user',{
  //定义状态的位置
  state: () =>{
    return {
      //此处状态的值无需 ref，因为pinia会自动将值包装成 ref
      surname: 'wang',
      name: 'ersut',
    }
  },
  //修改状态或者状态的逻辑处理，支持异步
  actions:{ 
    login(surname,name){
      if(surname === "" && name == ""){
        throw new Error("empty value")
      }
      if(surname === this.surname && name === this.name){
        return true;
      }
      return false;
    }
  }
})
```

### action的使用

```vue
<template>
<div>
  <label for="surname">姓氏</label>
  <input type="text" id="surname" v-model="data.surname"/>
</div>
<div>
  <label for="name">名字</label>
  <input type="text" id="name" v-model="data.name"/>
</div>
<div>
  <button @click="login">登录</button>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from "@/store/user"
import { reactive,ref } from 'vue';

//reactive下的ref会自动解包无需.value
const data = reactive({
  name:ref(''),
  surname:ref('')
})

const router = useRouter()
const useUserStore = userStore()

function login(){
  if (useUserStore.login(data.surname,data.name)){
    router.replace("/user/info")
  } else {
    alert("登录失败")
  }
}

</script>
```

### action的订阅

```js

//action的订阅
useUserStore.$onAction((obj) => {
  const startTime = Date.now()

  console.log("obj",obj)
  //action的函数名
  console.log("name",obj.name)
  //调用action函数时传递的参数
  console.log("args",obj.args)
  //对应的store
  console.log("store",obj.store)
  
  //action执行完成的回调
  obj.after((result) => {
    console.log(`action [${obj.name}], task time:[${Date.now()-startTime}ms], result -> [${result}]`)
  })

  //action出错时执行的回调
  obj.onError((error) => {
    console.warn(`action [${obj.name}] error msg:[${error}]`)
  })
  
  //注意：after和onError只会有一个执行
})
```

## 自定义插件

### 示例：利用插件实现state持久化

```js
import {createPinia} from 'pinia'

function persist(context){
  const {options,store} = context;
  //获取persist选项
  if(options.hasOwnProperty("persist") && options.persist instanceof Object){
    const persistProp = options.persist
    //获取persist选项的开关
    if (persistProp.hasOwnProperty("enabled") && typeof(persistProp.enabled) == 'boolean') {
      const enabled = persistProp.enabled;
      if (enabled) {
        const persistPrefix = "pinia-persist-"
        const storeId = store.$id
        //添加订阅
        store.$subscribe((mutation,state) => {
          const raw = JSON.stringify(state)
          //持久化数据
          localStorage.setItem(persistPrefix+storeId , raw)
        })
        const persistValue = localStorage.getItem(persistPrefix+storeId)
        const persistJson = persistValue ? JSON.parse(persistValue) : {}
        if(persistJson != {}){
          for (let key in store.$state) {
            if(persistJson.hasOwnProperty(key)){
              store.$state[key] = persistJson[key]
            }
          }
        }
      }
    }
  }
  debugger
}

//创建pinia
const pinia = createPinia()
//注册插件
pinia.use(persist)

export default pinia
```

#### 持久化插件的使用

```js
import { defineStore } from "pinia";

//定义store，第一个参数是store的唯一名称，第二个参数放store的选项
export const userStore = defineStore('user',{
  //定义状态的位置
  state: () =>{
    return {
      //此处状态的值无需 ref，因为pinia会自动将值包装成 ref
      surname: 'wang',
      name: 'ersut',
      info:{
        age: 0
      },
      hobbys:["自行车","篮球","爬山"],
      newHobbyNum: 0
    }
  },
  //持久化插件的参数
  persist:{
    //开启持久化
    enabled: true
  }
})
```

