import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { userStore } from "@/store/user"


createApp(App)
.use(router)
.use(store)
.mount('#app')

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
  
  //注意：after和onError只会执行一个55
})