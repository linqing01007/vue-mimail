<template>
  <div class="nav-header">
    <div class="topbar">
      <div class="container">
        <div class="info">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;" class="my-cart"><span class="cart-icon"></span>购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="navmenu">
      <div class="container">
        <div class="logo">
          <a href="javascript:;"></a>
        </div>
        <div class="menu">
          <ul>
            <li>
              <span href="javascript:;">小米手机</span>
              <div class="children">
                <a href="javascript:;" v-for="item in menuItems" :key="item.id" class="menu-item">
                  <div class="img">
                    <img :src=item.img alt="">
                  </div>
                    <p class="name">{{ item.name }}</p>
                    <p class="price">￥{{ item.price }}元</p>
                </a>
                <!-- <a href="javascript:;" class="menu-item">
                  <div class="img">
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                  </div>
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                </a>
                <a href="javascript:;" class="menu-item">
                  <div>
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                  </div>
                </a>
                <a href="javascript:;" class="menu-item">
                  <div>
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                  </div>
                </a>
                <a href="javascript:;" class="menu-item">
                  <div>
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                  </div>
                </a>
                <a href="javascript:;" class="menu-item">
                  <div>
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                  </div>
                </a>
                <a href="javascript:;" class="menu-item">
                  <div>
                    <img src="../assets/images/nav-img/nav-1.png" alt="">
                    <p class="name">小米cc9</p>
                    <p class="price">￥1799.00元</p>
                  </div>
                </a> -->
              </div>
              </li>
            <li><span href="javascript:;">Redmi红米</span></li>
            <li><span href="javascript:;">电视</span></li>
          </ul>
        </div>
        <div class="search">
          <input type="text">
          <div class="search-icon">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import '../mock'
import { get } from '../api/test'
export default {
  name: 'navHeader',
  setup () {
    const menuItems = ref([])
    onMounted(() => {
      get('/getTestData').then(res => {
        menuItems.value = res.navMenuItems
      })
    })
    return {
      menuItems
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
  .nav-header {
    .topbar {
      background-color: #333333;
      height: 39px;
      line-height: 39px;
      font-size: 12px;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1226px;
        margin: 0 auto;
        a {
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          display: inline-block;
          width: 119px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          margin-right: 0;
          .cart-icon {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
            background: url('../assets/images/icon-cart-checked.png') no-repeat center;
            background-size: contain;
          }
        }
      }
    }
    .navmenu {
      height: 112px;
      .container {
        position: relative;
        width: 1226px;
        height: 112px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
          width: 55px;
          height: 55px;
          background-color: $colorA;
          a {
            position: relative;
            display: inline-block;
            width: 55px;
            height: 55px;
            overflow: hidden;
            &:before, &:after {
              content: '';
              width: 55px;
              height: 55px;
              position: absolute;
              background-size: contain;
              left: 0;
              top: 0;
              transition: all .5s;
            }
            &:before {
              background: url('../assets/images/mi-home.png') no-repeat center;
            }
            &:after {
              background: url('../assets/images/mi-logo.png') no-repeat center;
              margin-left: 55px;
            }
            &:hover:after {
              margin-left: 0;
            }
            &:hover:before {
              margin-left: -55px;
            }
          }
        }
        .menu {
          // width: 634px;
          margin-left: -150px;
          li {
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            height: 55px;
            line-height: 55px;
            margin-right: 20px;
            // text-align: center;
            cursor: pointer;
            color: $colorB;
            &:hover {
              color: $colorA;
              .children {
                // display: block;
                opacity: 1;
                height: 220px;
              }
            }
            .children {
              // display: none;
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              text-align: center;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              opacity: 0;
              transition: all .5s;
              z-index: 11;
              overflow: hidden;
              .menu-item {
                position: relative;
                width: 16.6%;
                display: inline-block;
                margin-top: 10px;
                img {
                  height: 111px;
                  width: auto;
                }
                .name {
                  color: $colorB;
                  line-height: 16px;
                  margin-top: 19px;
                }
                .price {
                  line-height: 16px;
                  color: $colorA;
                }
                &:before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 28px;
                  height: 100px;
                  border-right: 1px solid #e0e0e0;
                }
                &:first-child:before {
                  display: none;
                }
              }
            }
          }
        }
        .search {
          border: 1px solid #e0e0e0;
          width: 319px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          input {
            box-sizing: border-box;
            border: none;
            width: 264px;
            height: 50px;
            padding-left: 20px;
            border-right: 1px solid #e0e0e0;
          }
          .search-icon {
            height: 50px;
            width: 52px;
            line-height: 52px;
            text-align: center;
            a {
              display: inline-block;
              width: 16px;
              height: 12px;
              background: url('../assets/images/icon-search.png') no-repeat center;
              background-size: contain;
              // margin-left: 18px;
              margin: auto;
            }
          }
        }
      }
    }
  }
</style>
