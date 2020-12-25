<template>
  <div class="scan-pay-code">
    <div class="mask"></div>
    <div class="content">
      <div class="img-guide">
        <img src="../images/pay/icon-scan.png" alt="">
      </div>
      <div class="img-code">
        <div class="title">
          <h3>微信支付</h3>
          <span class="icon-close" @click="close"></span>
        </div>
        <div class="qrcode">
          <img :src="img" alt="">
        </div>
        <div class="tip">
          <p>请用微信扫一扫</p>
          <p>二维码完成支付</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scanPayCode',
  props: ['img'],
  methods: {
    close () {
      console.log('scanPaycode.vue close')
      this.$emit('closePay')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';
.scan-pay-code {
  @include position(fixed);
  .mask {
    @include position(fixed);
    background-color: #000;
    opacity: 0.6;
  }
  .content {
    @include position(fixed, 50%, 50%, 670, auto);
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    .img-guide {
      img {
        width: 296px;
        height: 485px;
      }
    }
    .img-code {
      width: 370px;
      height: 440px;
      background-color: #fff;
      .title {
        position: relative;
        background-color: #f5f5f5;
        height: 60px;
        line-height: 60px;
        padding: 0 18px;
        // box-sizing: border-box;
        font-size: 20px;
        color: #333333;
        h3 {
          font-style: normal;
        }
        .icon-close {
          position: absolute;
          top: 23.5px;
          right: 20px;
          display: inline-block;
          width: 13px;
          height: 13px;
          background: url('../images/icon-close.png') no-repeat center;
          background-size: contain;
          cursor: pointer;
        }
      }
      .qrcode {
        text-align: center;
        padding: 44px 0 26px;
        // padding: ;
        // width: 100%;
        // height: 300px;
        // background-image: url('../images/pay/icon-qrcode.png');
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: 237px 240px;
        img {
          width: 237px;
          height: 240px;
        }
      }
      .tip {
        text-align: center;
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
</style>
