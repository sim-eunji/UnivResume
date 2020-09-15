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
        path: '/',
        name: 'Resume',
        component: () => import('@/views/Resume')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router