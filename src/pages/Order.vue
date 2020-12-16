<template>
  <div>
    <order-header :title="title">
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
  methods: {
    initTitleTip () {
      const pathTitleTip = {
        list: {
          title: '订单列表',
          tip: '查看订单列表'
        },
        confirm: {
          title: '确认订单',
          tip: '请仔细确认订单信息'
        },
        pay: {
          title: '支付订单',
          tip: '请核对支付信息'
        }
      }
      const path = this.$route.path.substring('/order/'.length)
      this.title = pathTitleTip[path].title
      this.tip = pathTitleTip[path].tip
    }
  },
  mounted () {
    this.initTitleTip()
  }
}
</script>
