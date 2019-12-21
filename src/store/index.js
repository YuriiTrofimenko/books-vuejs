import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import common from './common'
import book from './book'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, common, book
  }
})
