import Vue from 'vue'
// import store from '../store'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/Index'
import Product from '../pages/Product'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import OrderList from '../pages/OrderList'
import OrderConfirm from '../pages/OrderConfirm'
import OrderPay from '../pages/OrderPay'
import AliPay from '../pages/AliPay'
import User from '../pages/User'
import Login from '../pages/Login'
import UserSetting from '../pages/UserSetting'
import CartStatic from '../pages/CartStatic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'product/:id',
        name: 'product',
        component: Product,
        props: true
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail,
        props: true
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/cart/static',
    name: 'static',
    component: CartStatic
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: OrderConfirm
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: AliPay
      },
      {
        path: 'pay',
        name: 'pay',
        component: OrderPay
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'setting',
        name: 'setting',
        component: UserSetting
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.username) {
//       next()
//     } else {
//       next({ path: '/login' })
//     }
//   } else {
//     next()
//   }
// })

export default router
