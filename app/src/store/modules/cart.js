

export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => state.cart,
    shoppingCartTotal: state => {
      let counter = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          counter += item.product.price * item.quantity
        })
      }
      return counter
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        exists.quantity++
        return 
      }
      state.cart.push({ product, quantity })
    },
    SUBTRACT_FROM_CART: (state, { product }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        exists.quantity--
        return 
      }
    },
    REMOVE_FROM_CART: (state, {product}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      state.cart.splice(state.cart.indexOf(exists), 1)
    },
  },
  actions: {
    addProductToCart: ({commit}, {product, quantity}) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    subtractProductFromCart: ({commit}, {product, quantity}) => {
      if(quantity <= 1) {
        commit('REMOVE_FROM_CART', {product})
        return
      } 
      commit('SUBTRACT_FROM_CART', { product })
    },
    removeProductFromCart: ({commit}, {product}) => {
      commit('REMOVE_FROM_CART', {product})
    }
  },
}