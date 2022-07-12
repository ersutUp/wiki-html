import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '../views/hello-world'

const routes = [
  {
    path: '/',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/global-config',
    name: 'global',
    component: () => import("@/views/global-config")
  },
  {
    path: '/config',
    name: 'config',
    component: () => import("@/views/config")
  },
  {
    path: '/package',
    name: 'package',
    component: () => import("@/views/package")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
