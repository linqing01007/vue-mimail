/**
 *  小米商城Vuex-actions
 */
export default {
  saveUserName ({ commit }, payload) {
    console.log('1111111, action.saveUserName: ', payload)
    commit('saveUserName', {
      username: payload.username
    })
  },
  saveCartCount ({ commit }, payload) {
    commit('saveCartCount', payload.cartCount)
  }
}
