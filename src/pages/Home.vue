<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from '@/componnets/NavFooter'
import NavHeader from '@/componnets/NavHeader'
export default {
    name: 'home',
    components: {
        'nav-header': NavHeader,
        'nav-footer': NavFooter
    }
}
</script>
