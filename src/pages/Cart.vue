<template>
  <div>
    <order-header :title="'购物车列表'">
      <template v-slot:tip>
        <span>购物车界面tips</span>
      </template>
    </order-header>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
export default {
  name: 'cart',
  components: {
    'order-header': OrderHeader,
    'nav-footer': NavFooter
  }
}
</script>
