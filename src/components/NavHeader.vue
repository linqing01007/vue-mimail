<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" class="username" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-else @click="login()">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出登陆</a>
          <a href="javascript:;" v-if="username" @click="goOrderList">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart()">
            <span class="icon-cart"></span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in productList" :key="index">
                  <a href="" target="_blank">
                    <div class="pro-image">
                      <img :src="item.mainImage" alt="">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target='_blank'>
                    <div class="pro-image">
                      <img src="../images/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header',
  data () {
    return {
      productList: []
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      this.axios.post('/user/logout').then(() => {
        this.$cookies.remove('userId')
        this.$store.dispatch('userLogout')
      })
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        this.productList = res.list.slice(0, 6)
      })
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goOrderList () {
      this.$router.push('/order/list')
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then(res => {
        this.$store.dispatch('saveCartCount', {
          cartCount: res
        })
      })
    }
  },
  mounted () {
    this.getProductList()
    // console.log('33333333333: navHeader mounted: ', this.$route.params)
    if (this.$route.params.from === 'login') {
      this.getCartCount()
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      .container {
        @include flex();
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          margin-right: 0;
          .icon-cart {
            display: inline-block;
            @include bgImg(16px, 12px, '../images/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();
        .header-logo {
          // display: inline-block;
        }
        .header-menu {
          // display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 55px;
            margin-right: 20px;
            height: 55px;
            span {
              cursor: pointer;
            }
            &:hover {
              color:$colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              height: 0;
              opacity: 0;
              width: 1226px;
              // border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              overflow: hidden;
              transition: all .5s;
              z-index: 10;
              background-color: #ffffff;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 16px;
                line-height: 16px;
                text-align: center;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
                &:before {
                  content: '';
                  position: absolute;
                  top: 28px;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:first-child:before {
                  display: none;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input {
              border: none;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              box-sizing: border-box;
            }
            a {
              @include bgImg(16px, 12px, '../images/icon-search.png');
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
      }
    }
  }
</style>
