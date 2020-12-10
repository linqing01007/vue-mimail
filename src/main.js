import Vue from 'vue'
import router from './router/index'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.use(vueAxios, axios)
Vue.use(VueCookies)
const mock = false
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.request.use(function (config) {
  console.log('axios interceptors request: ', config)
  // request拦截需要返回config
  return config
})
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  console.log('axios interceptors response: ', response)
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (window.location.hash !== '#/index') {
      window.location.href = '/#/login'
    }
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
