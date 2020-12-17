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
              <a href="javascript:;" class="select" :class="{checked: selectedAll }" @click="toggleAll"></a>
              全选
            </div>
            <div class="name">商品名称</div>
            <div class="price">单价</div>
            <div class="count">数量</div>
            <div class="total">小计</div>
            <div class="op">操作</div>
          </div>
          <div class="cart-list">
            <template v-for="item in cartList">
              <div class="pro-info" :key="item.id">
                <div>
                  <a href="javascript:;" class="select" :class="{ checked: item.productSelected }" @click="updateProduct(item)"></a>
                </div>
                <div class="pro-name">
                  <img src="../images/item-box-3.jpg" alt="">
                  <span>{{ item.productName }} {{ item.productSubtitle }}</span></div>
                <div class="pro-price">{{ item.productPrice }}元</div>
                <div class="pro-count">
                  <div class="num-box">
                    <a href="javascript:;" @click="updateProduct(item, '-')">-</a>
                    <span>{{ item.quantity }}</span>
                    <a href="javascript:;" @click="updateProduct(item, '+')">+</a>
                  </div>
                </div>
                <div class="pro-total">{{ item.productTotalPrice }}元</div>
                <div class="pro-op"><a href="javascript:;" class="icon-close" @click="confirm(item)"><i class="iconfont">x</i></a></div>
              </div>
            </template>
          </div>
        </div>
        <div class="cart-footer clearfix">
          <div class="info">
            <a href="javascript:;">继续购物</a>
            <span>共<span class="amount">{{ cartList.length }}</span>件商品，已选择<span class="amount">{{ selectedAmount }}</span>件</span>
          </div>
          <div class="total-price">
            合计：<span class="price">{{ cartTotalPrice }}</span>元
            <div class="btn" @click="order">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <modal title="删除商品" btnType="3" :showModal="showConfirm" @submit="delProduct" @cancel="cancel">
      <template v-slot:body>
        <span>确定删除吗？</span>
      </template>
    </modal>
  </div>
</template>
<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
import ServiceBar from '@/components/ServiceBar'
import Modal from '@/components/Modal'
// import { debounce } from '@/util/util'
export default {
  name: 'cart',
  components: {
    'order-header': OrderHeader,
    'nav-footer': NavFooter,
    ServiceBar,
    Modal
  },
  data () {
    return {
      // 购物车列表
      cartList: [],
      // 是否全选中
      selectedAll: false,
      // 选中商品的总价
      cartTotalPrice: 0,
      // 控制二次确认
      showConfirm: false
    }
  },
  computed: {
    selectedAmount () {
      return this.cartList.filter(val => val.productSelected).length
    }
  },
  methods: {
    updateCart (res) {
      this.cartList = res.cartProductVoList
      this.selectedAll = res.selectedAll
      this.cartTotalPrice = res.cartTotalPrice
    },
    initCartList () {
      this.axios.get('/carts').then(res => {
        this.updateCart(res)
      })
    },
    updateProduct (product, op) {
      let quantity = product.quantity
      let selected = product.productSelected
      if (op === '+') {
        quantity = Math.min(product.productStock, quantity + 1)
      } else if (op === '-') {
        quantity = Math.max(1, quantity - 1)
      } else {
        selected = !selected
      }
      this.axios.put(`/carts/${product.productId}`, {
        quantity,
        selected
      }).then(res => {
        this.updateCart(res)
      })
    },
    confirm (product) {
      // 显示二次确认框时把选中的product缓存下来
      this.productBedel = product
      this.showConfirm = true
    },
    delProduct () {
      const productId = this.productBedel.productId
      this.axios.delete(`/carts/${productId}`).then(res => {
        this.updateCart(res)
      })
      this.showConfirm = false
    },
    toggleAll () {
      if (this.selectedAll) {
        this.axios.put('/carts/unSelectAll').then(res => {
          this.updateCart(res)
        })
      } else {
        this.axios.put('/carts/selectAll').then(res => {
          this.updateCart(res)
        })
      }
    },
    order () {
      const checked = this.cartList.every(val => !val.productSelected)
      if (checked) {
        alert('请至少选择一个商品')
        return
      }
      this.$router.push('/order/confirm')
    },
    cancel () {
      this.showConfirm = false
    }
  },
  mounted () {
    this.initCartList()
    // this.updateProduct = debounce(this._updateProduct)
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
      .checked {
        background-image: url('../images/icon-gou.png');
        background-position: center;
        background-size: 16px 12px;
        background-repeat: no-repeat;
        background-color: #ff6600;
        border: none;
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
          .pro-op {
            a {
              display: inline-block;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              color: #757575;
              i {
                font-style: normal;
                line-height: 24px;
                font-size: 16px;
              }
              &:hover {
                color: #fff;
                background-color: #ff6600;
              }
            }
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
