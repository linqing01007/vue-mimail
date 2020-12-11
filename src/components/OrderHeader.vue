<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/index"></a>
      </div>
      <div class="header-title">
        <h2>{{ title }}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="user"><a href="javascript:;">{{ username }}</a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-header',
  props: ['title'],
  computed: {
    username () {
      return this.$store.state.username
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid $colorA;
  .header-logo {
    float: left;
  }
  .header-title, .user {
    height: 55px;
    line-height: 55px;
    display: inline-block;
  }
  .header-title {
    float: left;
    margin-left: 55px;
    h2 {
      font-size: 28px;
      color: $colorB;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: $colorD;
      font-weight: 200;
    }
  }
  .user {
    float: right;
    a {
      font-size: 16px;
      color: $colorC;
    }
  }
}
</style>
