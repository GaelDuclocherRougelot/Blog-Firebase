import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Account from '../views/account.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
