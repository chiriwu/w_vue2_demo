import Vuex from "vuex";
import Vue from "vue";

import products from "./modules/products";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    products: products
  },
  state: {
    count: 0,
    hasLeft: false,
    hasTop: false
  },
  getter: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done);
    }
  },
  mutations: {
    increment(state, payload) {
      state.count++;
    },
    isHasLeft(state, status) {
      state.hasLeft = status;
    },
    isHasTop(state, status) {
      state.hasTop = status;
    }
  },
  actions: {
    addCount(context) {
      // 可以包含异步操作
      // context 是一个与 store 实例具有相同方法和属性的 context 对象
    }
  }
});

export default store;
