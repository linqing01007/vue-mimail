import Vue from 'vue'
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
import User from '../pages/User'
import Login from '../pages/Login'
import UserSetting from '../pages/UserSetting'

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
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
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
        component: Order
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

export default router
