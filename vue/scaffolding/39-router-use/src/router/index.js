import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import { loginKey } from "@/constant/storage";
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

const adminLogin = () => import("@/views/admin/login")
const adminConsole = () => import("@/views/admin/console")

//router使用keep-alive
const useKeepAlive = () => import("@/views/kepp-alive/use-keep-alive");
const useKeepAliveInclude = () => import("@/views/kepp-alive/use-keep-alive-include");
const useKeepAliveExclude = () => import("@/views/kepp-alive/use-keep-alive-exclude");
const useKeepAliveMaxCache = () => import("@/views/kepp-alive/use-keep-alive-max-cache");
const notUsedKeepAlive = () => import("@/views/kepp-alive/not-used-keep-alive");

const counter = () => import("@/views/kepp-alive/counter");
const formPage = () => import("@/views/kepp-alive/form");
const form2Page = () => import("@/views/kepp-alive/form2");
const keepAliveChildren = [
  {
    path: "counter",
    component: counter
  },
  {
    path: "form",
    component: formPage
  },
  {
    path: "form2",
    component: form2Page
  },
]

//路由的映射关系
let routes = [
  {
    path: "/:notFound(.*)",
    props: route => Object.assign(route.query,route.params),
    component: status404,
    meta:{
      title:"404页面"
    }
  },
  {
    path:"/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home,
    meta:{
      title:"首页"
    }
  },
  {
    path: "/method-jump",
    component: methodJump,
    meta:{
      title:"方法跳转"
    }
  },
  {
    //:id 代表动态路由中的id参数
    path: "/dynamic-route/:id",
    component: dynamicRoute,
    meta:{
      title:"动态路由"
    }
  },
  {
    path: "/lazy-router",
    //路由的懒加载
    component: routerLazy,
    meta:{
      title:"路由的懒加载"
    }
  },
  {
    path: "/lazy-router2",
    //路由的懒加载
    component: routerLazy2,
    meta:{
      title:"路由的懒加载2"
    }
  },
  {
    path:"/nesting-router",
    component: nesting,
    meta:{
      title:"嵌套路由"
    },
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
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"路由传参"
    }
  },
  {
    path: "/admin/login",
    component: adminLogin,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"控制台登录页"
    }
  },
  {
    path: "/admin/console",
    component: adminConsole,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"控制台首页"
    }
  },

  //keepAlive的使用
  {
    path: "/keepAlive/use",
    component: useKeepAlive,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"使用keepAlive"
    },
    children: keepAliveChildren
  },
  {
    path: "/keepAlive/notUsed",
    component: notUsedKeepAlive,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"不使用keepAlive"
    },
    children: keepAliveChildren
  },
  {
    path: "/keepAlive/include",
    component: useKeepAliveInclude,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"keepAlive指定组件"
    },
    children: keepAliveChildren
  },
  {
    path: "/keepAlive/exclude",
    component: useKeepAliveExclude,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"keepAlive排除组件"
    },
    children: keepAliveChildren
  },
  {
    path: "/keepAlive/maxCache",
    component: useKeepAliveMaxCache,
    //使用props对组件传参解耦  route.query：query参数；route.params：路径参数
    props: route => Object.assign(route.query,route.params),
    meta:{
      title:"keepAlive最大缓存数"
    },
    children: keepAliveChildren
  },
]

//创建路由
const router = createRouter({
  // 路由模式：HTML5模式
  history: createWebHistory(),
  //路由模式：hash模式
  // history: createWebHashHistory(),
  //映射关系
  routes,
  //激活链接时，应用于渲染标签的class
  linkActiveClass: "custom-active"
})

//导航守卫
//url中path的处理
router.beforeEach((to,from) => {
  const toPath = to.path;
  let handlePath = "";
  //path规范化处理
  for (let name of toPath.split("/")) {
    if(name != ""){
      handlePath+= "/"+name;
    }
  }
  //如果path不一致进行重定向
  if(toPath != handlePath){
    return {path:handlePath}
  }
})

//登录验证(前置守卫)
router.beforeEach((to,from) => {
  //登录验证
  const toPath = to.path;
  if(toPath.match(/^\/admin\/.*/g)){
    //登录页放过
    if(toPath === "/admin/login"){
      return true;
    }
    //判断是否登录
    const isLogin = localStorage.getItem(loginKey);
    if(isLogin == false || isLogin == null){
      return {path:"/admin/login"};
    }
  }
})

//处理title(后置守卫)
router.afterEach((to,from) => {
  const title = to.matched[0].meta.title;
  document.title = title;
})


//导出路由
export default router