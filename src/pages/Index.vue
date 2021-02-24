<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="menu-wrapper">
          <ul class="menu">
            <li class="menu-">手机 电话卡</li>
            <li class="menu-">电视 盒子</li>
            <li class="menu-">笔记本 平板</li>
            <li class="menu-">家电 插线板</li>
            <li class="menu-">出行 穿戴</li>
           <li class="menu-">智能 路由器</li>
           <li class="menu-">电源 配件</li>
           <li class="menu-">生活 箱包</li>
          </ul>
        </div>
        <div class="swiper-wrapper">
          <a-carousel autoplay arrows effect="fade">
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left:10px;zIndex:1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right:10px;zIndex:1">
                <right-circle-outlined />
              </div>
            </template>
            <div v-for="item in carouselItems" :key="item.id">
              <a href="javascript:;">
                <img :src="item.img" alt="">
              </a>
            </div>
            <!-- <div>
              <a href="javascript:;">
                <img src="../assets/images/slider/slide-1.jpg" alt="">
              </a>
            </div>
            <div>
              <a href="javascript:;">
                <img src="../assets/images/slider/slide-2.jpg" alt="">
              </a>
              </div>
            <div>
              <a href="javascript:;">
                <img src="../assets/images/slider/slide-3.jpg" alt="">
              </a>
            </div> -->
          </a-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { get } from '../api/test'
export default {
  name: 'index',
  components: {
    LeftCircleOutlined,
    RightCircleOutlined
  },
  setup () {
    const carouselItems = ref([])
    onMounted(() => {
      get('/getTestData').then(res => {
        carouselItems.value = res.slideItems
        console.log('index.vue getTestData', res.slideItems)
      })
    })
    return {
      carouselItems
    }
  }
}
</script>
<style lang="scss">
  .index {
    .container {
      width: 1226px;
      margin: 0 auto;
      .swiper-box {
        .swiper-wrapper {
          width: 1226px;
          height: 451px;
          text-align: center;
          img {
            width: auto;
            height: 451px;
          }
        }
      }
    }
  }
</style>
