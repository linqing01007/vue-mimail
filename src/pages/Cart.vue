<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from '@/componnets/NavFooter'
import OrderHeader from '@/componnets/OrderHeader'
export default {
    name: 'cart',
    components: {
        'order-header': OrderHeader,
        'nav-footer': NavFooter
    }
}
</script>
