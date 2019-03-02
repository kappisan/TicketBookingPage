import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tickets from './views/Tickets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "basket" */ './views/Basket.vue')
    },
    {
      path: '/tickets',
      name: 'tickets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Tickets
    }
  ]
})
