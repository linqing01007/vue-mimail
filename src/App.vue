<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
      res: {}
    }
  },
  mounted () {
    axios.get('/user/login').then(res => {
      this.res = res
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
