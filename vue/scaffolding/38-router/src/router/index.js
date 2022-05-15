import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import home from "@/views/home"
import about from "@/views/about"
import replacePage from '@/views/replace'

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
  },
  {
    path: "/replace",
    component: replacePage
  }
]

//创建路由
let router = createRouter({
  // 路由模式：HTML5模式
  history: createWebHistory(),
  //路由模式：hash模式
  // history: createWebHashHistory(),
  //映射关系
  routes,
  //激活链接时，应用于渲染标签的class
  linkActiveClass: "custom-active"
})

//导出路由
export default router