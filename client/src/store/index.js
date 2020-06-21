import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Auth';
import posts from './posts';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    posts
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})