/**
 *  小米商城的Vuex-mutations
 */
export default {
  saveUserName (state, payload) {
    state.username = payload.username
  },
  saveCartCount (state, payload) {
    state.cartCount = payload.cartCount
  },
  userLogout (state) {
    state.username = ''
    state.cartCount = 0
  }
}
