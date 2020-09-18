import Vue from 'vue'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'

const mock = true
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10
axios.interceptors.request.use(function (config) {
  console.log('axios interceptors request: ', config)
})
//接口错误拦截
axios.interceptors.response.use(function (response) {
  console.log('axios interceptors response: ', response)
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
