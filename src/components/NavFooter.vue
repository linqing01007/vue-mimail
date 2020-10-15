<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../images/logo-footer.png" alt="">
    </div>
    <p>小米商城</p>
    <div class="footer-link">
      <a href="https://www.imooc.com" target="_blank">河畔一角主页</a>
      <a href="https://www.imooc.com" target="_blank">vue 全栈课程</a>
      <a href="https://www.imooc.com" target="_blank">React 全家桶课程</a>
      <a href="https://www.imooc.com" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">Copyright @2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss">
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: #999999;
      display: inline-block;
      &:after {
        content: '';
        border-right: 1px solid #999999;
        margin: 0 10px;
      }
      &:last-child:after {
        display: none;
      }
    }
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>
