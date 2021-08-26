<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form"></div>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
export default {
  name: 'ali-pay',
  components: {
    Loading
  },
  data () {
    return {
      // orderId: this.$route.query.orderNo,
      content: '',
      loading: true
    }
  },
  methods: {
    paySubmit () {
      console.log('alipay: ', this.orderNo, this.$route.query)
      const orderNo = this.$route.query.orderId
      this.axios.post('/pay', {
        orderId: orderNo,
        orderName: 'vue-高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then(res => {
        this.content = res.content
        console.log('orderPay: ', this.content)
        setTimeout(() => {
          const form = document.getElementsByTagName('form')[0]
          form.submit()
        }, 100)
      })
    }
  },
  mounted () {
    this.paySubmit()
  }
}
</script>
