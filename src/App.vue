<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
// import { testAxios } from './api/test'
import storage from './storage'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup () {
    onMounted(() => {
      // testAxios()
      storage.set('user', 'name', 'nhq')
      console.log('app...', storage.get('user', 'name'))
    })
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
