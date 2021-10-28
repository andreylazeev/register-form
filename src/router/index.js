import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import UIKit from '../views/UIKit'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uikit',
    name: 'UI Kit',
    component: UIKit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
