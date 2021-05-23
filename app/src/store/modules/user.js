import axios from '@/axios'
import router from '../../router'

export default {
  state: {
    loggedIn: false,
    userId: '',
    userToken: '',
   
  },
  getters: {
    loggedIn: state => state.loggedIn,
    getUserId: state => state.userId,
    getUserToken: state => state.userToken
  },
  mutations: {
    LOGIN_USER: (state, payload) => {
      state.loggedIn = true,
      state.userId = payload.userId,
      state.userToken = payload.token
    },
    LOGOUT_USER: state => {
      state.loggedIn = false,
      state.userID = '',
      state.userToken = ''
    },
   
  },
  actions: {
    register: async ({dispatch}, _user) => {
      await axios.post('users/register', _user)
      const user = {
        email: _user.email,
        password: _user.password
      }
      dispatch('login', user)
    },
    login: ({commit}, user) => {
      axios.post('users/login', user)
      .then(res => {
        if(res.status === 200) {
          commit('LOGIN_USER', res.data)
          router.push('/products')
        }
      })
    },
    logout: ({commit}) => {
      commit('LOGOUT_USER')
    }
    
  }
}