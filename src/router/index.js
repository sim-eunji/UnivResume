import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/Resume')
      },
      {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main')
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('@/views/Signup')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router