<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from '@/componnets/NavFooter'
import OrderHeader from '@/componnets/OrderHeader'
export default {
    name: 'order',
    components: {
        'order-header': OrderHeader,
        'nav-footer': NavFooter
    }
}
</script>
