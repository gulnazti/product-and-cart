import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastOrders from '@/views/PastOrders'
import Products from '@/views/Products'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
