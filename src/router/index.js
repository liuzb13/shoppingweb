import Vue from 'vue'
import VueRouter from 'vue-router'

import list from '../components/list.vue'
import cart from '../components/cart'
import product from '../components/product'

Vue.use(VueRouter)

const routes = [
 {path:'/',redirect:'/list'},
 {path:'/list',component:list},
 {path:'/product/:id',component:product},
 {path:'/cart',component:cart}
]

const router = new VueRouter({
  routes
})

export default router
