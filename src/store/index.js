import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summary: [] // A summary of new and total cases per country updated daily.
  },
  mutations: {
    SET_SUMMARY (state, data) {
      state.summary = data
    }
  },
  actions: {
    async GET_SUMMARY ({ commit }) {
      try {
        const response = await axios({
          url: 'https://api.covid19api.com/summary',
          method: 'GET'
        })
        commit('SET_SUMMARY', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    GET_SUMMARY_COUNTRIES (state) {
      return state.summary.Countries
    }
  },
  modules: {}
})
