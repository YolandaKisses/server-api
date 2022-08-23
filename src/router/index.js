import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () => import('../views/Home.vue'),
  meta: { title: '首页', path: '/' },
  children: [{
    path: '/A-Business',
    component: () => import('../views/A-Business.vue'),
    meta: { title: 'A', path: '/A-Business' }
  },
  {
    path: '/B-Extension',
    component: () => import('../views/B-Extension.vue'),
    meta: { title: 'B', path: '/B-Extension' }
  },
  {
    path: '/C-Management',
    component: () => import('../views/C-Management.vue'),
    meta: { title: 'C', path: '/C-Management' }
  }, {
    path: '/D-customer',
    component: () => import('../views/D-customer.vue'),
    meta: { title: 'D', path: '/D-customer' }
  }
  ]
}]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
