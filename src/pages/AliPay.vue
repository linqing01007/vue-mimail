<template>
  <div class="ali-pay">
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: 'ali-pay',
  data () {
    return {
      orderId: this.$route.query.orderNo,
      content: ''
    }
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderNo,
        orderName: 'vue-高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then(res => {
        this.content = res.content
        console.log('orderPay: ', this.content)
      })
    }
  },
  mounted () {
    this.paySubmit()
  }
}
</script>
