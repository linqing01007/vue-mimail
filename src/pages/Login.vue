<template>
  <div class="login">
    <div class="header">
      <div class="container">
        <a href="javascript:;">
          <img src="../images/mi-logo.png" alt="">
          <div class="title">
            <h3>小米商城</h3>
            <p>让每个人都能享受科技的乐趣</p>
          </div>
        </a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="title">
            <h4><span>账号登陆</span><span>扫码登陆</span></h4>
          </div>
          <div class="input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="密码" v-model="password">
          </div>
          <div class="msg">
            <a href="javascript:;" class="btn" @click="login">登陆</a>
            <a href="javascript:;" class="sms" @click="register">手机短信登陆/注册</a>
          </div>
          <div class="reg">
            <a href="javascript:;" @click="$router.push('/index')">立即注册</a>
            <span>|</span>
            <a href="javascript:;">忘记密码?</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="">简体</a>
        <a href="">繁体</a>
        <a href="">English</a>
        <a href="">常见问题</a>
        <a href="">隐私政策</a>
      </div>
      <div class="copyright">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userLogin',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then(() => {
        this.$router.push('/index')
      })
    },
    register () {
      console.log('register')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.login {
  .header {
    .container {
      padding: 20px;
      a {
        color: $colorI;
      }
      img {
        width: auto;
        height: 100%;
        background-color: #ff6600;
      }
      .title {
        display: inline-block;
        margin-left: 14px;
        h3 {
          font-size: 30px;
          line-height: 30px;
          font-weight: 400;
        }
        p {
          margin-top: 10px;
          font-size: 8px;
          line-height: 8px;
        }
      }
    }
  }
  .wrapper {
    background:url('../images/login-bg.jpg') no-repeat center;
    // position: relative;
    .container {
      height: 576px;
      .login-form {
        position: absolute;
        right: 0;
        bottom: 29px;
        width: 410px;
        height: 510px;
        background-color: $colorG;
        padding-left: 31px;
        padding-right: 31px;
        box-sizing: border-box;
        .title {
          margin-top: 40px;
          margin-bottom: 20px;
        }
        h4 {
          font-size: 24px;
          color: $colorC;
          text-align: center;
          span {
            cursor: pointer;
            &:hover {
              color:#ff6600
            }
            &:after {
              content: '';
              border: 1px solid $colorD;
              margin: 0 30px;
            }
            &:last-child:after {
            display: none;
          }
          }
        }
        .input {
          display: inline-block;
          margin-bottom: 20px;
          width: 348px;
          height: 50px;
          border: 1px solid $colorH;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .msg {
          margin-top: 20px;
          .btn {
            width: 100%;
            display: inline-block;
            line-height: 50px;
            font-size: 16px;
          }
          .sms {
            margin-top: 8px;
            text-align: center;
            display: inline-block;
            width: 100%;
            font-size: 14px;
            color: #ff6600;
          }
        }
        .reg {
          margin-top: 18px;
          font-size: 16px;
          text-align: center;
          a {
            color: #999;
            &:hover {
              color: #ff6600;
            }
          }
          span {
            margin: 0 8px;
          }
        }
      }
    }
  }
}
</style>
