<template>
  <div class="order-confirm">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <order-header
      title="订单确认">
      <template v-slot:tip>
        <span>谨防钓鱼诈骗</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2>收货地址</h2>
            <div class="addr-list clearfix">
              <div class="addr-info" :class="{selected: selected===ind}" v-for="(item, ind) in addrList" :key="item.id" @click="selectAddr(ind)">
                <h3>{{ item.receiverName }}</h3>
                <div class="phone">{{ item.receiverMobile }}</div>
                <div class="street">{{ `${item.receiverProvince} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}` }}</div>
                <div class="action">
                  <a href="javascript:;" class="fl" @click="updateAddr('delete', item)">
                    <svg class="icon icon-del"><use href="#icon-del"></use></svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="updateAddr('put', item)">
                    <svg class="icon icon-edit"><use href="#icon-edit"></use></svg>
                  </a>
                </div>
              </div>
              <div class="addr-add" @click="updateAddr('post')">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <li v-for="item in cartList" :key="item.id">
                <div class="good-name">
                  <img src="../images/item-box-3.jpg" alt="">
                  <span>{{ item.productName }} {{ item.productSubtitle }}</span>
                </div>
                <div class="good-price">{{ item.productPrice }}元x{{ item.quantity }}</div>
                <div class="good-total">{{ item.productTotalPrice }}元</div>
              </li>
            </ul>
          </div>
          <div class="item-shipping">
            <h3>配送方式</h3>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h3>发票</h3>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
            <a href="javascript:;">商品明细</a>
          </div>
          <div class="detail">
            <p>
              <span>商品件数:</span>
              <span class="detail-info">{{ totalProductCount }}件</span>
            </p>
            <p>
              <span>商品总价:</span>
              <span class="detail-info">{{ cartTotalPrice }}元</span>
            </p>
            <p>
              <span>优惠活动:</span>
              <span class="detail-info">9元</span>
            </p>
            <p>
              <span >运费:</span>
              <span class="detail-info">0元</span>
            </p>
            <p class="total">
              <span>应付总额:</span>
              <span class="detail-info">
                <em>{{ cartTotalPrice }}</em>元
              </span>
            </p>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-large btn-default">返回购物车</a>
            <a href="javascript:;" class="btn btn-large" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <modal
      :title="modalTitle"
      :btnType="btnType"
      :showModal="showModal"
      @cancel="cancel"
      @submit="submit"
    >
      <template v-slot:body>
        <template v-if="action==='delete'">
          <span>确认删除此地址吗？</span>
        </template>
        <template v-else>
          <div class="edit-wrap">
            <div class="item">
              <input type="text" class="input" placeholder="姓名" v-model="itemChecked.receiverName">
              <input type="text" class="input" placeholder="手机号" v-model="itemChecked.receiverMobile">
            </div>
            <div class="item">
              <select name="province" v-model="itemChecked.receiverProvince">
                <option value="" disabled>请选择</option>
                <option value="北京">北京</option>
                <option value="天津">天津</option>
                <option value="河北">河北</option>
              </select>
              <select name="city" v-model="itemChecked.receiverCity">
                <option value="" disabled>请选择</option>
                <option value="北京">北京</option>
                <option value="天津">天津</option>
                <option value="河北">石家庄</option>
              </select>
              <select name="district" v-model="itemChecked.receiverDistrict">
                <option value="" disabled>请选择</option>
                <option value="北京">昌平区</option>
                <option value="天津">海淀区</option>
                <option value="河北">东城区</option>
                <option value="天津">西城区</option>
                <option value="河北">顺义区</option>
                <option value="天津">房山区</option>
              </select>
            </div>
            <div class="item">
              <!-- <label for="street">街道</label> -->
              <textarea name="street" v-model="itemChecked.receiverAddress" placeholder="请输入详细街道"></textarea>
            </div>
            <div class="item">
              <input type="text" class="input" placeholder="邮编" v-model="itemChecked.receiverZip">
            </div>
          </div>
        </template>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from '../components/Modal'
import OrderHeader from '../components/OrderHeader.vue'
// 定义地址操作的常量
const ADD_ADDR = 'poat'
const EDIT_ADDR = 'put'
const DEL_ADDR = 'delete'
export default {
  name: 'orderConfirm',
  components: {
    Modal,
    OrderHeader
  },
  data () {
    return {
      showModal: false,
      modalTitle: '',
      action: ADD_ADDR, // 地址操作，0表示增加，1表示编辑，2表示删除
      btnType: '1', // modal的btnType
      shippingId: 0, // 要修改的地址对应的id
      selected: 0, // 选中的地址index
      itemChecked: {}, // 表单绑定数据
      cartList: [], // 购物车列表
      cartTotalPrice: 0, // 购物车总价格
      addrList: [] // 地址列表
    }
  },
  computed: {
    totalProductCount () {
      return this.cartList.filter(p => p.productSelected).length
    }
  },
  methods: {
    getAddressList () {
      this.axios.get('/shippings', {
        params: {
          pageNum: 1,
          pageSize: 10
        }
      }).then(res => {
        this.addrList = res.list
      })
    },
    getCartList () {
      this.axios.get('/carts').then(res => {
        this.cartList = res.cartProductVoList
        this.cartTotalPrice = res.cartTotalPrice
      })
    },
    clearItemChecked () {
      this.itemChecked = {}
    },
    selectAddr (ind) {
      this.selected = ind
    },
    updateAddr (action = 0, item = {}) {
      // 根据操作类型更新地址信息
      this.btnType = '1'
      this.shippingId = item.id
      this.action = action
      this.showModal = true
      if (action === ADD_ADDR) {
        this.title = '新增地址'
        this.itemChecked = {}
      } else if (action === DEL_ADDR) {
        this.title = '删除地址'
        this.btnType = '3'
      } else if (action === EDIT_ADDR) {
        this.title = '修改地址'
        this.itemChecked = Object.assign({}, item) // 这不能直接赋值，否则修改itemChecked时会影响到item
      }
      // console.log('update addr: ', action, this.btnType)
    },
    validateForm () {
      const { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = this.itemChecked
      let ret = true
      let msg = ''
      if (!receiverName) {
        ret = false
        msg = '请输入收货人的姓名'
        return { ret, msg }
      }
      if (!/\d{11}/.test(receiverMobile)) {
        // console.log('请输入正确格式的手机号码')
        ret = false
        msg = '请输入正确格式的手机号码'
        return { ret, msg }
      }
      if (!receiverProvince || !receiverCity || !receiverDistrict || !receiverAddress) {
        ret = false
        msg = '请选择正确的地址'
        return { ret, msg }
      }
      if (!receiverZip) {
        ret = false
        msg = '请输入邮编'
        return { ret, msg }
      }
      return { ret, msg }
    },
    submit () {
      // 地址表单的提交
      if (this.action !== DEL_ADDR) {
        const { ret, msg } = this.validateForm()
        if (!ret) {
          this.$message.warning(msg)
          return
        }
      }
      // const { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = this.itemChecked
      // const methods = ['post', 'put', 'delete']
      const url = this.shippingId ? `/shippings/${this.shippingId}` : '/shippings'
      this.axios({
        method: this.action,
        url,
        data: this.itemChecked
      }).then(() => {
        this.$message.success('操作成功！')
        this.showModal = false
        this.clearItemChecked()
        this.getAddressList()
      })
    },
    cancel () {
      // 取消删除
      this.showModal = false
      this.clearItemChecked()
    },
    order () {
      // 创建订单并跳转到支付确认页面
      const addr = this.addrList[this.selected]
      if (!addr) {
        this.$message.error('请选择一个收货地址!')
        return
      }
      const shippingId = addr.id
      console.log('orderconfirm: ', this.selected, shippingId)
      this.axios.post('/orders', {
        shippingId
      }).then(res => {
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo: res.orderNo
          }
        })
      })
    }
  },
  mounted () {
    this.getAddressList()
    this.getCartList()
  },
  created () {
    // this.clearItemChecked()
    this.itemChecked.receiverProvince = ''
    this.itemChecked.receiverCity = ''
    this.itemChecked.receiverDistrict = ''
  }
}
</script>
<style lang='scss'>
@import '../assets/scss/config.scss';
.order-confirm {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 84px;
    .order-box {
      background-color: #fff;
      padding-bottom: 40px;
      padding-left: 40px;
      h2 {
        font-size: 20px;
        font-weight: 200;
        color: $colorB;
        margin-bottom: 21px;
      }
      .item-address {
        padding-top: 38px;
        // justify-content: ;
        .addr-list {
          .addr-info, .addr-add {
            box-sizing: border-box;
            float: left;
            width: 271px;
            height: 180px;
            border: 1px solid #e5e5e5;
            margin-right: 15px;
            padding: 15px 24px;
            font-size: 14px;
            color: #757575;
            cursor: pointer;
          }
          .addr-info {
            &.selected {
              border: 1px solid $colorA;
            }
            h3 {
              height: 27px;
              font-size: 18px;
              font-weight: 300;
              color: $colorB;
              margin-bottom: 10px;
            }
            .street {
              height: 50px;
            }
            .action {
              height: 50px;
              line-height: 50px;
              .icon {
                width: 20px;
                height: 20px;
                vertical-align: middle;
                fill: #666666;
                &:hover {
                  fill: #ff6700;
                }
              }
            }
          }
          .addr-add {
            text-align: center;
            color: $colorD;
            .icon-add {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background: url('../images/icon-add.png') #e0e0e0 no-repeat center;
              background-size: 14px;
              margin: 45px auto 10px;
            }
          }
        }
      }
      .item-good {
        margin-top: 34px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 12px;
        h2 {
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 5px;
        }
        li {
          display: flex;
          align-items: center;
          height: 40px;
          line-height: 40px;
          margin-top: 10px;
          font-size: 16px;
          color: $colorB;
          .good-name {
            flex: 4;
            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
            }
          }
          .good-price {
            flex: 2;
          }
          .good-total {
            padding-right: 44px;
            color: $colorA;
          }
        }
      }
      .item-shipping, .item-invoice {
        // position: relative;
        margin-top: 31px;
        line-height: 20px;
        h3 {
          display: inline-block;
          font-size: 20px;
          width: 80px;
          margin-right: 71px;
        }
        span, a {
          font-size: 16px;
          color: $colorA;
          margin-right: 23px;
        }
      }
      .detail {
        padding: 50px;
        border-bottom: 1px solid $colorJ;
        text-align: right;
        font-size: 16px;
        color: $colorC;
        .detail-info {
          color: $colorA;
          display: inline-block;
          width: 100px;
        }
        p {
          line-height: 15px;
          margin-bottom: 12px;
        }
        .total {
          em {
            font-style: normal;
            font-size: 28px;
          }
        }
      }
      .btn-group {
        margin-top: 37px;
        text-align: right;
      }
    }
  }
  .edit-wrap{
    font-size:14px;
    .item{
      margin-bottom:15px;
      .input{
        display:inline-block;
        width:283px;
        height:40px;
        line-height:40px;
        padding-left:15px;
        border:1px solid #E5E5E5;
        &+.input{
          margin-left:14px;
        }
      }
      select{
        width: 120px;
        height:40px;
        line-height:40px;
        border:1px solid #E5E5E5;
        margin-right:15px;
        padding-left: 6px;
      }
      textarea{
        height:62px;
        width:100%;
        padding:13px 15px;
        box-sizing:border-box;
        border:1px solid #E5E5E5;
      }
    }
  }
}
</style>
