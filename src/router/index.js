import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Reset from '../views/reset.vue'
import Article1 from '../views/article1.vue'

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
  {
    path: '/article1',
    name: 'article1',
    component: Article1
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
