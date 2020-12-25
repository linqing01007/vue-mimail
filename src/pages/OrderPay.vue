<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="header-box">
          <div class="header-info">
            <div class="icon">
              <i class="icon-check"></i>
            </div>
            <div class="addr-box">
              <h3>订单提交成功！去付款咯~</h3>
              <div class="addr-detail">
                <p>请在<em>30</em>分钟内完成，超时后将取消订单</p>
                <p>收货信息：{{ orderShipping.receiverName }} {{ orderShipping.receiverMobile }} {{ orderShipping.receiverProvince }} {{ orderShipping.receiverCity }} {{ orderShipping.receiverDistrict }} {{ orderShipping.receiverAddress }}</p>
              </div>
            </div>
            <div class="price-info">
              <p>应付总额：<em>{{ payment }}</em>元</p>
              <p>订单详情<i class="icon-down"></i></p>
            </div>
          </div>
          <div class="order-detail">
            <div class="item">
              <div class="item-title">订单号：</div>
              <div class="item-info">{{ orderNo }}</div>
            </div>
            <div class="item">
              <div class="item-title">收货信息：</div>
              <div class="item-info">{{ orderShipping.receiverName }} {{ orderShipping.receiverMobile }} {{ orderShipping.receiverProvince }} {{ orderShipping.receiverCity }} {{ orderShipping.receiverDistrict }} {{ orderShipping.receiverAddress }}</div>
            </div>
            <div class="item good">
              <div class="item-title">商品名称：</div>
              <div class="item-info">
                <ul>
                  <li v-for="item in orderItemVoList" :key="item.productId">
                    <img :src="item.productImage" alt="">
                    <span>{{ item.productName }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="item-title">发票信息：</div>
              <div class="item-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="pay-info">
          <h3>请选择以下支付方式付款</h3>
          <div class="pay-type">
            <h3>支付平台</h3>
            <div class="pay-item zfb" :class="{checked:payType===1}" @click="pay(1)">
            </div>
            <div class="pay-item wx" :class="{checked:payType===2}" @click="pay(2)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code v-if="showCode" :img="codeURL" @closePay="closePay"></scan-pay-code>
    <modal
     title="支付确认"
     btnType="3"
     :showModal="showPayModal"
     sureText="查看订单"
     cancelText="未支付"
     @cancel="showPayModal=false"
     @submit="goOrderList"
    >
      <template v-slot:body>
        <p>您确认是否完成支付?</p>
      </template>
    </modal>
  </div>
</template>
<script>
import QRCode from 'qrcode'
import ScanPayCode from '../components/ScanPayCode'
import Modal from '../components/Modal'
export default {
  name: 'orderPay',
  components: {
    ScanPayCode,
    Modal
  },
  data () {
    return {
      orderNo: this.$route.query.orderNo, // 订单编号
      orderItemVoList: [], // 订单商品列表
      orderShipping: {}, // 订单收货地址
      payment: 0, // 订单金额
      payType: 0, // 支付方式，1为支付宝，2为微信，默认不选择
      showCode: false, // 控制是否显示微信二维码
      codeURL: '', // 转换后的二维码图片
      showPayModal: false, // 是否显示二次支付确认弹框
      T: '' // 轮询定时器id
    }
  },
  methods: {
    getOrderInfo () {
      // console.log('orderPay: ', this.$route.query.orderNo)
      this.axios.get(`/orders/${this.orderNo}`).then(res => {
        this.orderItemVoList = res.orderItemVoList
        this.orderShipping = res.shippingVo
        this.payment = res.payment
      })
    },
    pay (type) {
      this.payType = type
      if (type === 1) {
        window.open('/#/order/alipay?orderId=' + this.orderNo, '_blank')
      } else {
        this.axios.post('/pay', {
          orderId: this.orderNo,
          orderName: 'vue-高仿小米商城',
          amount: 0.01,
          payType: 2
        }).then(res => {
          // console.log('orderpay: ', res)
          QRCode.toDataURL(res.content).then(url => {
            // console.log('orderpey wechat: ', url)
            this.showCode = true
            this.codeURL = url
            this.loopOrderState()
          }).catch(error => {
            console.log('orderpay wechat.error: ', error)
          })
        })
      }
    },
    goOrderList () {
      this.$router.push('/order/list')
    },
    closePay () {
      this.showCode = false
      this.showPayModal = true
      clearInterval(this.T)
    },
    // 轮询订单状态
    loopOrderState () {
      this.T = setInterval(() => {
        this.axios.get(`orders/${this.orderNo}`).then(res => {
          if (res.status === 20) {
            // 未支付
            clearInterval(this.T)
            this.goOrderList()
          }
        })
      }, 1000)
    }
  },
  mounted () {
    this.getOrderInfo()
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
.order-pay {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .container {
      .header-box {
        background-color: #fff;
        padding: 62px 50px;
        .header-info {
          display: flex;
          align-items: center;
          font-size: 12px;
          .icon {
            .icon-check {
              display: inline-block;
              width: 90px;
              height: 90px;
              border-radius: 50%;
              background-image: url('../images/icon-gou.png');
              background-color: #80c58a;
              background-repeat: no-repeat;
              background-position: center;
              background-size: 60px;
              // text-align: center;
            }
          }
          .addr-box {
            margin-left: 40px;
            margin-right: 248px;
            h3 {
              font-size: 24px;
              font-weight: bold;
              color: #333333;
            }
            .addr-detail {
              margin-top: 20px;
              color: #999999;
              em {
                font-style: normal;
                color: $colorA;
              }
            }
          }
          .price-info {
            &>p:first-child {
              margin-bottom: 30px;
            }
            em {
              font-style: normal;
              color: $colorA;
              font-size: 16px;
            }
            .icon-down {
              margin-left: 10px;
              display: inline-block;
              width: 14px;
              height: 10px;
              background: url('../images/icon-down.png') no-repeat center;
              background-size: contain;
              cursor: pointer;
              transition: all .5s;
              &.up {
                transform: rotate(180deg);
              }
            }
            .icon-up {
              transform: rotate(180deg);
            }
          }
        }
        .order-detail {
          border-top: 1px solid #d7d7d7;
          margin-top: 45px;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          .item {
            margin-bottom: 19px;
            .item-title {
              width: 100px;
              float:left;
            }
            .item-info {
              display: inline-block;
              img {
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .pay-info {
        margin-top: 30px;
        background-color: #fff;
        padding: 26px 50px 72px;
        color: #333333;
        h3 {
          font-size: 16px;
          color: #333333;
          font-weight: 200;
          margin: 20px auto;
        }
        .pay-type {
          border-top: 1px solid #d7d7d7;
          .pay-item {
            width: 188px;
            height: 64px;
            line-height: 64px;
            display: inline-block;
            border: 1px solid #d7d7d7;
            text-align: center;
            margin-right: 20px;
            // padding: 10px 20px;
            // box-sizing: border;
            cursor: pointer;
            &.zfb {
              background: url('../images/pay/icon-ali.png') no-repeat center;
              background-size: 103px 38px;
            }
            &.wx {
              background: url('../images/pay/icon-wechat.png') no-repeat center;
              background-size: 103px 38px;
            }
            &.checked {
              border: 1px solid $colorA;
            }
          }
        }
      }
    }
  }
}
</style>
