import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Router } from 'express'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// 服务端渲染改造
export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}
// const router = new VueRouter({
//   routes
// })

// export default router
