import Vue from 'vue'
import Vuex from 'vuex'
import toyStore from './toys.store.js';
import socketStore from './SocketStore.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    toyStore,
    socketStore
  }
})
