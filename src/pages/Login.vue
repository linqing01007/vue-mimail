<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <div class="logo">
          <a href="/index"></a>
        </div>
        <div class="title">
          <h1>小米商城</h1>
          <p>让每个人都能享受科技的乐趣</p>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="form-title">
          <a>账号登录</a>
          <a>扫码登录</a>
        </div>
        <!-- <div class="input">
          <input type="text" placeholder="邮箱/手机号码/小米ID">
        </div> -->
        <validate-input placeholder="邮箱/手机号码/小米ID" v-model="zhanghao" :rules="zhanghaoRules"></validate-input>
        <validate-input placeholder="请输入密码" v-model="password" type="password"></validate-input>
        <div class="btn">登录</div>
        <div class="phone-login">
          <a href="javascript:;">手机短信登录/注册</a>
        </div>
        <div class="register">
          <a href="javascript:;">立即注册</a>
          <span class="line">|</span>
          <a href="javascript:;">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import validateInput from '../components/ValidateForm/ValidateInput.vue'
import validateByType from '../components/ValidateForm/rules'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'login',
  components: {
    validateInput
  },
  data () {
    return {}
  },
  setup () {
    const zhanghao = ref('')
    const password = ref('')
    const validateZhanghao = function () {
      return validateByType(zhanghao.value, 'email') || validateByType(zhanghao.value, 'phoneNo') || !validateByType(zhanghao.value, 'userName')
    }
    const zhanghaoRules = ref([
      {
        type: 'required',
        message: '账号不能为空'
      },
      {
        type: 'custom',
        validator: validateZhanghao,
        message: '请输入合法的账号信息'
      }
    ])
    return {
      zhanghao,
      password,
      // validateZhanghao,
      zhanghaoRules
    }
  }
})
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
.login {
  .container {
    .header {
      display: flex;
      align-items: center;
      height: 100px;
      .title {
        margin-left: 20px;
        // text-align: center;
        h1 {
          font-size: 38px;
          line-height: 38px;
          // margin-bottom: 2px;
        }
        p {
          margin-top: 4px;
          font-size: 6px;
        }
      }
    }
  }
  .wrapper {
    height: 576px;
    background: url('../assets/images/login-bg.jpg') no-repeat center;
    background-size: cover;
    position: relative;
    .container {
      position: absolute;
      right: 100px;
      top: 50px;
      width: 410px;
      height: 526px;
      min-width: 400px;
      background-color: $colorG;
      padding: 38px 31px;
      text-align: center;
      font-size: 24px;
      // line-height: 24px;
      .form-title {
        margin-bottom: 10px;
        a {
          color: $colorC;
          &:first-child:after {
            content: '';
            border: 1px solid #e0e0e0;
            margin: 0 42px;
          }
        }
      }
      .input {
        margin-top: 20px;
        font-size: 14px;
        border: 1px solid #e0e0e0;
        // width: 316px;
        height: 50px;
        // line-height: 50px;
        input {
          width: 100%;
          height: 100%;
          // line-height: 22px;
        }
      }
      .btn {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        // width: 316px;
      }
      .phone-login {
        margin-top: 10px;
        font-size: 14px;
        a {
          color: $colorA;
        }
      }
      .register {
        margin-top: 30px;
        font-size: 14px;
        color: #999;
        a {
          color: #999;
          &:hover {
            color: $colorA;
          }
        }
        .line {
          margin: 0 12px;
        }
      }
    }
  }
}
</style>
