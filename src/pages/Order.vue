<template>
  <div>
    <order-header :title='title'>
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
export default {
  name: 'order',
  components: {
    'order-header': OrderHeader,
    'nav-footer': NavFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    const path = this.$route.path
    if (path === '/order/list') {
      this.title = '订单列表'
      this.tip = '请选择商品'
    } else if (path === 'order/confirm') {
      this.title = '订单确认'
      this.tip = '请仔细确认收货地址'
    } else {
      this.title = '订单支付'
      this.tip = ''
    }
  }
}
</script>
