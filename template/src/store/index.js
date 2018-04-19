import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import ls from '@/utils/localStorage'

const LS_KEY = 'user' // localStorage key
const lsData = ls.getItem(LS_KEY) // 获取本地数据

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    movies
  },
  getters
  // plugins: [plugin]
})

export default store
