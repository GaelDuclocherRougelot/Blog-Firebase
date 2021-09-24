import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Reset from '../views/reset.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
