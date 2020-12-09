<template>
  <div class="detail">
    <product-param :title="productInfo.name"></product-param>
    <div class="wrapper clearfix">
      <div class="container">
        <div class="swiper fl">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="item in swiperSlideOptions" :key="item.id">
              <img :src="item.img" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content fr">
          <h2 class="pro-title">{{productInfo.name}}</h2>
          <p class="pro-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="delivery">小米自营</div>
          <div class="pro-price">2599元<span class="del">2999元</span></div>
          <div class="line"></div>
          <div class="address">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道<a href="javascript:;" class="modi">修改</a></div>
            <div class="stock">有现货</div>
          </div>
          <div class="pro-version clearfix">
            <h2>选择版本</h2>
            <div class="phone fl check">6GB+64GB 全网通 1099元</div>
            <div class="phone fr">4GB+64GB 移动4G 1049元</div>
          </div>
          <div class="pro-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="pro-total">
            <div class="phone-info clearfix">
              <div class="fl">
                {{productInfo.name}} {{'6GB+64GB'}} 全网通 深灰色
              </div>
              <div class="fr">{{productInfo.price}}元<span class="ori-price">2999元</span></div>
            </div>
            <div class="total-price">总计：{{productInfo.price}}元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn">加入购物车</a>
            <a href="javascript:;" class="btn btn-like"><span class="icon-like"></span>喜欢</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="../images/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from '@/components/ServiceBar'
import ProductParam from '../components/ProductParam.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'detail',
  components: {
    'service-bar': ServiceBar,
    ProductParam,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      productInfo: {},
      swiperOptions: {
        autoplay: false,
        // loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlideOptions: [
        {
          img: require('../images/detail/phone-1.jpg')
        },
        {
          img: require('../images/detail/phone-2.jpg')
        },
        {
          img: require('../images/detail/phone-3.jpg')
        },
        {
          img: require('../images/detail/phone-4.jpg')
        }
      ]
    }
  },
  methods: {
    getProductInfo () {
      const id = this.$route.params.id
      this.axios.get(`/products/${id}`).then((res) => {
        this.productInfo = res
      })
    }
  },
  mounted () {
    this.getProductInfo()
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
  .detail {
    .wrapper {
      .swiper {
        width: 642px;
        height: 617px;
        padding-top: 5px;
        // background-color: $colorJ;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        width: 584px;
        height: 870px;
        .pro-title {
          font-size: 28px;
          padding-top: 30px;
          height: 26px;
          padding-bottom: 16px;
        }
        .pro-info {
          margin-top: 10px;
          font-size: 14px;
          color: $colorD;
        }
        .delivery {
          margin-top: 16px;
          font-size: 18px;
          color: $colorA;
          font-weight: 600;
        }
        .pro-price {
          position: relative;
          margin-top: 6px;
          font-size: 20px;
          color: $colorA;
          .del {
            position: absolute;
            top: -50%;
            transform: translate(0,50%);
            font-size: 14px;
            margin-left: 10px;
            line-height: 26px;
            color: $colorD;
            text-decoration: line-through;
          }
        }
        .line {
          height: 0;
          border-top: 1px solid $colorD;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .address {
          background-color: $colorE;
           border: 1px solid $colorD;
          padding: 26px;
          .icon-loc {
            background-image: url('../images/detail/icon-loc.png');
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
            width: 15px;
            height: 15px;
          }
          .addr {
            display: inline-block;
            margin-left: 6px;
          }
          .modi {
            margin-left: 16px;
            color: $colorA;
          }
          .stock {
            margin-top: 16px;
            color: $colorA;
          }
        }
        .pro-version, .pro-color {
          margin-top: 20px;
          h2 {
            font-size: 18px;
            margin-bottom: 20px;
          }
        }
        .pro-version, .pro-color {
          .phone {
            width: 287px;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: $colorB;
            border: 1px solid $colorE;
            text-align: center;
            cursor: pointer;
            box-sizing: border-box;
            span {
              color: #666;
              margin-left: 15px;
            }
            .color {
              display: inline-block;
              width: 14px;
              height: 14px;
              background-color: #666;
              margin-right: 6px;
            }
            &.check {
              border: 1px solid $colorA;
              color: $colorA;
            }
          }
        }
        .pro-total {
          margin-top: 30px;
          padding: 24px 33px 29px 30px;
          background-color: #fafafa;
          font-size: 14px;
          height: 108px;
          margin-bottom: 30px;
          box-sizing: border-box;
          .ori-price {
            margin-left: 6px;
            text-decoration: underline;
          }
          .total-price {
            color: $colorA;
            font-size: 24px;
            margin-top: 18px;
          }
        }
        .btn-group {
          .btn {
            width: 200px;
          }
          .btn-like {
            width: 100px;
            background-color: $colorC;
            .icon-like {
              display: inline-block;
              width: 14px;
              height: 14px;
              background-image: url('../images/icon-like.png');
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
    .price-info{
      background-color:#F3F3F3;
      height:340px;
      h2{
        font-size:24px;
        color:#333333;
        padding-top:38px;
        margin-bottom:30px;
      }
    }
  }
</style>
