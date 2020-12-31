<template>
  <div class="order-list">
    <order-header
      title="订单列表">
      <template v-slot:tip>
        <span>谨防钓鱼诈骗</span>
      </template>
    </order-header>
    <div class="container">
      <loading v-if="loading"></loading>
      <template v-for="order in orderList">
        <div class="item" :key="order.orderNo">
          <div class="item-title">
            <div class="order-info">
              <span>{{ order.createTime }}</span>
              <span>{{ order.receiverName }}</span>
              <span>订单号: {{ order.orderNo }}</span>
              <span>{{order.paymentTypeDesc }}</span>
            </div>
            <div class="order-price">
              <span>应付金额：<em>{{ order.payment | currency}}</em>元</span>
            </div>
          </div>
          <div class="item-body">
            <div class="pro-box">
              <div class="pro" v-for="item in order.orderItemVoList" :key="item.productId">
                <img :src="item.productImage" alt="">
                <div class="info">
                  <p>{{ item.productName }}</p>
                  <p>{{ item.currentUnitPrice }}元 X {{ item.quantity }}</p>
                </div>
              </div>
            </div>
            <div class="pay">
              立即付款 >
            </div>
          </div>
        </div>
      </template>
      <div class="more">
        <!-- <div class="btn" @click="loadMoreByBtn" v-if="showBtn">加载更多</div>
        <div class="tip" v-else>已无更多...</div> -->
        <!-- <div class="infinite-scroll"
          v-infinite-scroll="loadMoreByScroll"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="400"
          v-if="false">
          <img v-if="loading" src="../images/loading-svg/loading-spinning-bubbles.svg" alt="">
        </div>  -->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize="pageSize"
            @current-change="handleChange"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import Loading from '../components/Loading'
import infiniteScroll from 'vue-infinite-scroll'
import { Pagination } from 'element-ui'
export default {
  name: 'oderList',
  components: {
    Loading,
    OrderHeader,
    [Pagination.name]: Pagination
  },
  data () {
    return {
      orderList: [], // 订单列表数据
      // pageSize: 5, // 请求订单列表的每页数据量
      pageNum: 1, // 请求订单列表的页数
      showBtn: true, // 是否显示加载更多按钮
      busy: true, // 控制是否禁止滚动加载
      loading: true,
      total: 0, // 分页器总数量
      pageSize: 10 // 分页器每页数量，请求订单列表的每页数据量
    }
  },
  directives: {
    infiniteScroll
  },
  methods: {
    initOrderList () {
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
      }).then(res => {
        this.loading = false
        this.orderList = res.list
        this.showBtn = res.hasNextPage
        this.busy = !res.hasNextPage
        this.total = res.pages
      })
    },
    loadMoreByBtn () {
      // 【加载更多】按钮
      this.pageNum++
      this.initOrderList()
    },
    // 专门给滚动加载使用的
    initList () {
      this.pageNum++
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
      }).then(res => {
        this.orderList = this.orderList.concat(res.list)
        this.loading = false
        this.busy = !res.hasNextPage
      })
    },
    loadMoreByScroll () {
      // 滚动加载更多
      this.busy = true
      this.loading = true
      setTimeout(() => {
        this.initList()
      }, 500)
    },
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.initOrderList()
    }
  },
  filters: {
    formatTime (timeStr) {
      return timeStr
    },
    currency (payment) {
      return payment.toFixed(2)
    }
  },
  mounted () {
    this.initOrderList()
    // this.initList = this.getInitList()
    // window.addEventListener('scroll', this.loadMoreByScroll)
  }
}
</script>
<style lang='scss'>
@import '../assets/scss/config.scss';
.order-list {
  .container {
    margin-bottom: 80px;
    .item {
      border: 1px solid $colorA;
      margin-top: 20px;
      background-color: $colorG;
      .item-title {
        background-color: hsl(50, 65%, 77%);
        padding: 0 20px;
        height: 50px;
        // opacity: .2;
        font-size: 14px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        span {
          margin-left: 8px;
        }
        em {
          font-style: normal;
          font-size: 18px;
        }
      }
      .item-body {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
        .info {
          display: inline-block;
          vertical-align: middle;
          margin-left: 20px;
        }
        .pay {
          color: $colorA;
          cursor: pointer;
        }
      }
    }
    .more {
      text-align: right;
      margin-top: 30px;
      .btn {
        margin: 30px auto;
      }
      .tip {
        font-size: 14px;
        // text-align: center;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: $colorA;
      }
    }
  }
}
</style>
