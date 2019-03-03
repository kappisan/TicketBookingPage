import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Basket from './views/Basket.vue'
import Checkout from './views/Checkout.vue'
import Book from './views/Book.vue'
import Bitcoin from './views/Bitcoin.vue'

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
      component: Basket
      //component: () => import(/* webpackChunkName: "basket" */ './views/Basket.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin
    },
    {
      path: '/book/:id',
      name: 'book',
      props: true,
      component: Book
    }
  ]
})
