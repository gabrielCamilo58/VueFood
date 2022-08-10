import { createStore } from 'vuex'
import companies from './modules/companies/index.js'
import cart from './modules/cart/index.js';
import auth from './modules/auth/index.js';
import orders from './modules/orders/index.js';

export default createStore({
  state: {
    preloader: false,
    textPreloader: 'carregando...'
  },
  getters: {
  },
  mutations: {
    SET_PRELOADER(state, status){
      state.preloader = status
      state.textPreloader = 'Carregando...'
    },
    SET_TEXTPRELOADER(state, text){
      state.textPreloader = text; 
    }
  },
  actions: {
  },
  modules: {
    companies,
    cart,
    auth,
    orders
  }
})


