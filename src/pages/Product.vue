<template>
  <div class="product">
    <product-param>
      <template v-slot:btn>
        <a href="javascript:;" class="btn">立即购买</a>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>小米9</h2>
        <h3>8周年旗舰版</h3>
        <p>
          <a href="javascript:;">全球首款双频GPS</a>
          <span>|</span>
          <a href="javascript:;">晓龙845</a>
          <span>|</span>
          <a href="javascript:;">AI变焦双摄</a>
          <span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">
          <span><span class="icon">￥</span><em>2599</em></span>
          <span class="origin"><span class="icon">￥</span><em>2999</em></span>
        </div>
      </div>
      <div class="item-bg2"></div>
      <div class="item-bg3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in sliders" :key="item.id">
            <img :src="item.img" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影
        <br />慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影版超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
        <br />更能AI精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-if="showSlide">
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video src="../images/product/video.mp4" muted controls="controls" autoplay></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParam from '@/components/ProductParam'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'product',
  props: ['id'],
  components: {
    ProductParam,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false,
        navigation: {
          nextE1: '.swiper-button-next',
          prevE1: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      sliders: [
        {
          id: 1,
          img: require('../images/product/gallery-2.png')
        },
        {
          id: 2,
          img: require('../images/product/gallery-3.png')
        },
        {
          id: 3,
          img: require('../images/product/gallery-4.png')
        }
      ],
      showSlide: ''
    }
  },
  methods: {
    closeVideo () {
      this.showSlide = 'slideUp'
      setTimeout(() => {
        this.showSlide = ''
      }, 600)
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';
  .content {
    text-align: center;
    .item-bg {
      height: 718px;
      background: url('../images/product/product-bg-1.png') no-repeat center;
      h2 {
        font-size: 80px;
        padding-top: 55px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        color: #333;
        font-size: 20px;
        // position: relative;
        .icon {
          position: relative;
          top: -10px;
        }
        em {
          font-style: normal;
          font-size: 38px;
        }
        .origin {
          font-size: 16px;
          text-decoration: line-through;
          em {
            font-size: 28px;
          }
          .icon {
            top: -4px
          }
        }
      }
    }
    .item-bg2 {
      background: url(../images/product/product-bg-3.png) no-repeat center;
      height: 638px;
      background-size: cover;
    }
    .item-bg3 {
      background: url(../images/product/product-bg-2.png) no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-swiper {
      margin: 36px auto 52px;
    }
    .item-video {
      height: 1044px;
      background-color: $colorI;
      text-align: center;
      color: $colorG;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        letter-spacing: 4px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background-image: url('../images/product/gallery-1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 546px;
        width: 1226px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          @include position(fixed);
          background-color: $colorE;
          z-index: 10;
          opacity: .4;
        }
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }
          to {
            top: 50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }
          to {
            top: -50%;
            opacity: 0;
          }
        }
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 536px;
          z-index: 11;
          opacity: 1;
          .icon-close {
            position: absolute;
            right: 20px;
            top: 20px;
            @include bgImg(20px, 20px, '../images/icon-close.png');
            z-index: 12;
            cursor: pointer;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            outline: none;
          }
          &.slideDown {
            top: 50%;
            animation: slideDown .6s linear;
          }
          &.slideUp {
            animation: slideUp .6s linear;
          }
        }
      }
    }
  }
</style>
