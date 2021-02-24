import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home'
import Index from '../pages/Index'
import Order from '../pages/Order'
import OrderList from '../pages/OrderList'
import OrderPay from '../pages/OrderPay'
import OrderConfirm from '../pages/OrderConfirm'
import Login from '../pages/Login'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: 'index',
        component: Index
      }
    ]
  },
  {
    path: '/order',
    component: Order,
    children: [
      {
        path: 'list',
        component: OrderList
      },
      {
        path: 'pay',
        component: OrderPay
      },
      {
        path: 'confirm',
        component: OrderConfirm
      }
    ]
  },
  {
    path: '/product',
    component: Product,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetail
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/*/',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
