import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Login from '@/views/Auth/Login.vue'

// 定义路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/auth',
    component: () => import('@/views/Auth/Auth.vue'),
    children: [
      {
        path: '',
        redirect: Login
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: () => import('@/views/Auth/Register.vue')
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  }
]

// 创建路由实例
const router = createRouter({
  // import.meta.env.BASE_URL作为路由的基础路径，默认值是'/'
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router