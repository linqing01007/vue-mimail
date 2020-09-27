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
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车(0)
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
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
                <li>
                  <div class="image">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="小米10至尊纪念版">
                  </div>
                  <div>小米10至尊纪念版</div>
                  <div>5299元起</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
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
  name: 'nav-header'
}
</script>
<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
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
        height: 112px;
        @include flex();
        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6600;
          a {
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before {
              content: '';
              @include bgImg(55px, 55px, '../images/mi-home.png');
              transition: margin .2s;
            }
            &:after {
              content: '';
              @include bgImg(55px, 55px, '../images/mi-logo.png');
            }
            &:hover:before {
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color:#ff6600;
            }
            .children {
              @include flex();
              position: absolute;
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
              margin-left: 18px;
            }
          }
        }
      }
    }
  }
</style>
