<template>
  <div class="order">
    productDetail {{ id }}
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'productDetail',
  setup () {
    const route = useRoute()
    const id = ref(route.params.id)
    onMounted(() => {
      console.log('productDetail onmounted: ', route.params)
    })
    return {
      id
    }
  }
}
</script>
