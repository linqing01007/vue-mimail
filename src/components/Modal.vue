<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name='body'></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType=='1'" @click="$emit('submit')">{{ sureText }}</a>
          <a href="javascript:;" v-else-if="btnType=='2'" @click="$emit('cancel')">{{ sureText }}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{ sureText }}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{ sureText }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'model',
  props: {
    // 弹框类型：小small，中middle，大large,表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型：1.确定 2.取消 3.确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      typt: String,
      default: '取消'
    },
    showModal: Boolean
  },
  methods: {
    cancel () {
      this.showModal = false
    }
  },
  mounted () {
    console.log('modal mounted: ', this.btnType, typeof this.btnType, this.btnType === '1', this.sureText)
  }
}
</script>
<style lang='scss'>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/modal.scss';
</style>
