<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import storage from './storage'
// import jsonp from 'jsonp'
export default {
  name: 'app',
  data () {
    return {
      // res: {}
    }
  },
  mounted () {
    axios.get('/user').then(res => {
      // this.res = res
      console.log('app.vue.get user: ', res)
      this.$store.dispatch('saveUserName', {
        username: res.username
      })
    })
    storage.setItem('user', { name: 'nhq', age: 23 })
    storage.setItem('session', { name: 'test' })
    storage.clear('name', 'user')
  }
}
</script>
<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
