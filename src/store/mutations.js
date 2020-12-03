/**
 *  小米商城的Vuex-mutations
 */
export default {
  saveUserName (state, payload) {
    console.log('2222222 mutations: ', payload)
    state.username = payload.username
  },
  saveCartCount (state, payload) {
    state.cartCount = payload.cartCount
  }
}
