import { createRouter, createWebHistory } from 'vue-router'
import loginPage from "@/views/login"

const userInfoPage = () => import('@/views/userInfo')
const changeInfoPage = () => import('@/views/changeInfo')

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage
  },
  {
    path: '/user/info',
    name: 'userInfo',
    component: userInfoPage
  },
  {
    path: '/change/info',
    name: 'changeInfo',
    component: changeInfoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
