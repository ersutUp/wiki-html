import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/home/HomeView')
const CartView = () => import('@/views/cart/CartView')
const ProfileView = () => import('@/views/profile/ProfileView')

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
