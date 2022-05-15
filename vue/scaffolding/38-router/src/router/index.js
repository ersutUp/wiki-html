import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import home from "@/views/home"
import about from "@/views/about"

//路由的映射关系
let routes = [
  {
    path:"/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/about",
    component: about
  }
]

//创建路由
let router = createRouter({
  // 路由模式：HTML5模式
  history: createWebHistory(),
  //路由模式：hash模式
  // history: createWebHashHistory(),
  //映射关系
  routes
})

//导出路由
export default router