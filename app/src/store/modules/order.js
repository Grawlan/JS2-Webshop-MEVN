import axios from '@/axios'

export default {
  state: {
    orders: [],
    order: null
  },
  getters: {
   orders: state => state.orders,
   order: state => state.order
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders
    },
    GET_ORDERS: (state, orders) => {
      state.orders = orders
    }
  },
  actions: {
    saveOrder: ({commit}, order) => {
      axios.post('/orders/', order).then(res => {
        if(res.status === 201){
          commit('GET_ORDERS', res.data)
        }
      })
     
    },
    getOrders: async ({commit}, userId) => {
      const res = await axios.get('/orders/' + userId)
      commit('SET_ORDERS', res.data)
      console.log(res.data)
    }
  }
}