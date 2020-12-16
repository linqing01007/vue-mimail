<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <h3>收货地址</h3>
        <div class="addr-box">
          <div class="add-addr addr-item"></div>
          <div class="addr-item"></div>
        </div>
        <div class="order-info">
          <div class="post">
            <h3>配送方式</h3>
            <span>包邮</span>
          </div>
          <div class="bill">
            <h3>发票</h3>
            <span>电子发票</span>
            <span>个人</span>
            <span>商品明细</span>
          </div>
          <div class="amount">
            <p><span class="amount-item">商品件数:</span><span class="amount-info">7件</span></p>
            <p><span class="amount-item">商品总价:</span><span class="amount-info">999元</span></p>
            <p><span class="amount-item">优惠活动:</span><span class="amount-info">9元</span></p>
            <p><span class="amount-item">运费:</span><span class="amount-info">0元</span></p>
            <p class="total"><span class="amount-item">应付总额:</span><span class="amount-info">69999元</span></p>
          </div>
        </div>
        <div class="order-op btn-group">
          <a href="javascript:;" class="btn back">返回购物车</a>
          <a href="javascript:;" class="btn">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rderList'
}
</script>
<style lang='scss'>
.order-list {
  .wrapper {
    background-color: #d7d7d7;
    padding-top: 30px;
    .container {
      background-color: #fff;
      padding: 30px 50px;
      box-sizing: border-box;
      h3 {
        font-size: 20px;
        font-weight: 400;
      }
      .addr-box {
        margin-top: 10px;
        display: flex;
        // justify-content: ;
        .addr-item {
          width: 200px;
          height: 200px;
          border: 1px solid #e5e5e5;
          margin-left: 20px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
      .order-info {
        margin-top: 60px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        padding: 30px 0;
      }
    }
  }
}
</style>
