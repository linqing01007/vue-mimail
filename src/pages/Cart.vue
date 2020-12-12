<template>
  <div class="cart">
    <order-header :title="'购物车列表'">
      <template v-slot:tip>
        <span>购物车界面tips</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="content">
          <div class="nav-title">
            <div>
              <a href="javascript:;" class="select"></a>
              全选
            </div>
            <div class="name">商品名称</div>
            <div class="price">单价</div>
            <div class="count">数量</div>
            <div class="total">小计</div>
            <div class="op">操作</div>
          </div>
          <div class="cart-list">
            <div class="pro-info">
              <div>
                <a href="javascript:;" class="select"></a>
              </div>
              <div class="pro-name">
                <img src="../images/item-box-3.jpg" alt="">
                <span>小米8 6GB 全息幻彩紫 64Gb</span></div>
              <div class="pro-price">1999元</div>
              <div class="pro-count">
                <div class="num-box">
                  <a href="javascript:;">-</a>
                  <span>1</span>
                  <a href="javascript:;">+</a>
                </div>
              </div>
              <div class="pro-total">1999元</div>
              <div class="pro-op"></div>
            </div>
          </div>
        </div>
        <div class="cart-footer clearfix">
          <div class="info">
            <a href="javascript:;">继续购物</a>
            <span>共<span class="amount">1</span>件商品，已选择<span class="amount">1</span>件</span>
          </div>
          <div class="total-price">
            合计：<span class="price">2599</span>元
            <div class="btn">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
import ServiceBar from '@/components/ServiceBar'
export default {
  name: 'cart',
  components: {
    'order-header': OrderHeader,
    'nav-footer': NavFooter,
    ServiceBar
  }
}
</script>
<style lang="scss">
.cart {
  .wrapper {
    background-color: #f5f5f5;
    .content {
      background-color: #fff;
      text-align: center;
      .select {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #e5e5e5;
        vertical-align: middle;
        margin-right: 17px;
      }
      .nav-title {
        display: flex;
        // justify-content: space-between;
        height: 79px;
        line-height: 79px;
        font-size: 14px;
        color: #999999;
        text-align: center;
        padding: 20px 0;
        box-sizing: border-box;
        align-items: center;
        div {
          flex: 1;
        }
        .name {
          flex: 3;
        }
        .count {
          flex: 2;
        }
      }
      .cart-list {
        .pro-info {
          height: 125px;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #e5e5e5;
          div {
            flex: 1;
          }
          .pro-name {
            flex: 3;
            font-size: 18px;
            display: flex;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
            span {
              margin-left: 30px;
            }
          }
          .pro-count {
            flex: 2;
            // border: 1px solid #000;
            .num-box {
              width: 150px;
              height: 40px;
              border: 1px solid #e5e5e5;
              display: inline-block;
              line-height: 40px;
              a {
                display: inline-block;
                width: 50px;
                // height: 10px;
                color: #333;
              }
            }
            span {
              display: inline-block;
              width: 50px;
              line-height: 40px;
              font-size: 14px;
            }
          }
          .pro-total {
            color: #ff6600;
          }
        }
      }
    }
    .cart-footer {
      margin-top: 20px;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      div {
        display: inline-block;
      }
      .info {
        margin-left: 29px;
        a {
          color: #666;
          margin-right: 37px;
        }
        span {
          .amount {
            color: #ff6600;
            margin: 0 5px;
          }
        }
      }
      .total-price {
        float: right;
        color: #ff6600;
        .price {
          font-size: 24px;
        }
        .btn {
          width: 202px;
          height: 50px;
          line-height: 50px;
          margin-left: 37px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
