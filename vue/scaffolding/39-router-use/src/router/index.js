import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import home from "@/views/home"
import methodJump from "@/views/method-jump"
import dynamicRoute from "@/views/dynamic-route"

const status404 = () => import("@/views/error/404");

const routerLazy = () => import("@/views/router-lazy")
const routerLazy2 = () => import("@/views/router-lazy2")

const nesting = () => import("@/views/nesting-router")
const nestingNews = () => import("@/views/nesting-router-news")
const nestingMessage = () => import("@/views/nesting-router-message")

const query = () => import("@/views/query")

//路由的映射关系
let routes = [
  {
    path: "/:notFound(.*)",
    props: route => Object.assign(route.query,route.params),
    component: status404,
  },
  {
    path:"/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/method-jump",
    component: methodJump
  },
  {
    //:id 代表动态路由中的id参数
    path: "/dynamic-route/:id",
    component: dynamicRoute
  },
  {
    path: "/lazy-router",
    //路由的懒加载
    component: routerLazy
  },
  {
    path: "/lazy-router2",
    //路由的懒加载
    component: routerLazy2
  },
  {
    path:"/nesting-router",
    component: nesting,
    //嵌套路由
    children:[
      {
        //默认展示 nestingNews 组件
        path:"",
        redirect:"/nesting-router/news"
      },
      {
        path:"news",
        component: nestingNews
      },
      {
        path:"msg",
        component: nestingMessage
      },
    ]
  },
  {
    path: "/query/:id",
    component: query,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params)
  },
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