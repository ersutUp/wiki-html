import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { userStore } from "@/store/user"


createApp(App)
.use(router)
.use(store)
.mount('#app')


userStore().$subscribe((mutation, state) => {
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