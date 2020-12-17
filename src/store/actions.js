/**
 *  小米商城Vuex-actions
 */
export default {
  saveUserName ({ commit }, payload) {
    // console.log('1111111, action.saveUserName: ', payload)
    commit('saveUserName', {
      username: payload.username
    })
  },
  saveCartCount ({ commit }, payload) {
    // console.log('2222222, action.saveCartCount: ', payload)
    commit('saveCartCount', {
      cartCount: payload.cartCount
    })
  },
  userLogout ({ commit }) {
    commit('userLogout')
  }
}
