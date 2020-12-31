<template>
  <div>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
export default {
  name: 'order',
  components: {
    'nav-footer': NavFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
  }
}
</script>
