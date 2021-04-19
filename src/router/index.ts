import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'
import Order from '../pages/Order.vue'
import OrderList from '../pages/OrderList.vue'
import OrderPay from '../pages/OrderPay.vue'
import OrderConfirm from '../pages/OrderConfirm.vue'
import Login from '../pages/Login.vue'
import Product from '../pages/Product.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Register from '../pages/Register.vue'
import Cart from '../pages/Cart.vue'
import NotFound from '../pages/NotFound.vue'

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
