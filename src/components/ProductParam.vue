<template>
  <div class="wrapper">
    <div class="container">
      <div class="pro-title">
        <h3>小米8 透明探索版</h3>
        <span>|</span>
        <a href="javascript:;">小米8</a>
        <span>|</span>
        <a href="javascript:;">小米8 SE</a>
      </div>
      <div class="pro-param">
        <a href="javascript">概述</a>
        <span>|</span>
        <a href="javascript">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="btn"><div href="javascript:;" class="btn"></div></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.wrapper {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  z-index: 10;
  .container {
    @include flex();
    .pro-title {
      h3 {
        display: inline-block;
        font-size: 18px;
      }
      span {
        margin: 0 7px;
      }
      a {
        font-size: 12px;
        line-height: 12px;
        color: #333;
      }
    }
    .pro-param {
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>
