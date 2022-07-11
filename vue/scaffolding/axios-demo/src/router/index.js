import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '../views/hello-world'

const routes = [
  {
    path: '/',
    name: 'hello',
    component: HelloView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
