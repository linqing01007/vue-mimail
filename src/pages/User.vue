<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
import NavHeader from '@/components/NavHeader'
export default {
  name: 'user',
  components: {
    'nav-header': NavHeader,
    'nav-footer': NavFooter
  }
}
</script>
