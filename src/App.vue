<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import storage from './storage'
// import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    const url = '/search/hotwords'
    axios.get(url).then(res=> {
      console.log(res)
    })
    storage.setItem('user', {'name': 'nhq', 'age': 23})
    storage.setItem('session', {'name': 'test'})
    storage.clear('name', 'user')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
