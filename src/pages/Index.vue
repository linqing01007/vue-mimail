<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul class="children-list" v-for="(items, index) in phoneList" :key="index">
                  <li class="list-item" v-for="(item, i) in items" :key="i">
                    <a href="javascript:;"><img :src="item.img" alt="">{{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in sliderList" :key="index">
            <a :href="'#/product/'+item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-for="(item, index) in adsList" :key="index" :href="`/product/${item.id}`">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="#/product/30">
          <img src="../images/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/product/35">
                <img src="../images/mix-alpha.jpg" alt="">
              </a>
            </div>
            <div class="product-list">
              <div class="list" v-for="(list,i) in productList" :key="i">
                <div class="item" v-for="(item, j) in list" :key="j">
                  <span :class="[j%2==0 ? 'new-pro': 'kill-pro']">新品</span>
                  <div class="item-img">
                    <img :src="item.mainImage" alt="">
                  </div>
                  <div class="item-info">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.subtitle }}</p>
                    <p class="price" @click="addCart(item.id)">{{ item.price }}元</p>
                  </div>
                </div>
              </div>
              <div class="list"></div>
            </div>
          </div>
        </div>
      </div>
      <service-bar></service-bar>
      <modal
        modalType="middle"
        title="添加成功"
        btnType="1"
        sureText="查看购物车"
        :showModal="showModal"
        @submit="goToCart"
        @cancel="showModal=false">
        <template v-slot:body>
          <p>商品添加成功</p>
        </template
      ></modal>
  </div>
</template>
<script>
import ServiceBar from '@/components/ServiceBar'
import Modal from '@/components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    'service-bar': ServiceBar,
    Swiper,
    'swiper-slide': SwiperSlide,
    Modal
  },
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      sliderList: [
        {
          id: '42',
          img: require('../images/slider/slide-1.jpg')
        },
        {
          id: '45',
          img: require('../images/slider/slide-2.jpg')
        },
        {
          id: '46',
          img: require('../images/slider/slide-3.jpg')
        },
        {
          id: '42',
          img: require('../images/slider/slide-4.jpg')
        },
        {
          id: '42',
          img: require('../images/slider/slide-5.jpg')
        }
      ],
      adsList: [
        {
          id: 33,
          img: require('../images/ads/ads-1.png')
        },
        {
          id: 48,
          img: require('../images/ads/ads-2.jpg')
        },
        {
          id: 45,
          img: require('../images/ads/ads-3.png')
        },
        {
          id: 47,
          img: require('../images/ads/ads-4.jpg')
        }
      ],
      phoneList: [
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ],
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ],
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ],
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ],
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ],
        [
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          },
          {
            name: '小米c9',
            img: require('../images/item-box-1.png'),
            desc: '这是小米c9的介绍信息。。。',
            price: '2999元'
          }
        ]
      ],
      productList: [[], []],
      showModal: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        this.productList = [res.list.slice(6, 10), res.list.slice(10)]
      })
    },
    addCart (productId) {
      // this.showModal = true
      this.axios.post('/carts', {
        productId,
        selected: true
      }).then((res) => {
        if (!res) {
          this.$router.push('/login')
          return
        }
        this.showModal = true
      }).catch(() => {
        this.showModal = true
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          // position: relative;
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: '';
              @include bgImg(10px, 15px, '../images/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            position: absolute;
            top: 0;
            left: 264px;
            background-color: $colorG;
            border: 1px solid $colorH;
            .children-list {
              display: flex;
              justify-content: space-between;
              height: 75px;
              .list-item {
                z-index: 10;
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right:15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      line-height: 21px;
      height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .product-list {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorJ;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $colorJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px 0 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '../images/icon-cart-hover.png');
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
