import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/mobile_web/index.vue')
    },
    {
      path: '/pc',
      name: 'pc',
      component: () => import('../views/pc_web/index.vue')
    }
  ]
})
