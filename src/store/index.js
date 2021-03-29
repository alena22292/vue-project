import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },

  // Methods are functions that effect state;
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // Actions are functions that you call throughout your application that call mutations
  actions: {
    // commit references to the mutation function
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },
  modules: {
  }
})
