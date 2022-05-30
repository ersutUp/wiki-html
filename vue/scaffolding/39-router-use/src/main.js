import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {loginKey} from "@/constant/storage"

localStorage.removeItem(loginKey)

createApp(App)
//使用路由插件
.use(router)
.mount('#app')
