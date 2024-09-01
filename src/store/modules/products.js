// products.js

// initial state
const state = {
  added: [],
  checkoutStatus: null,
};
// getters
const getters = {
  checkoutStatus: (state) => state.checkoutStatus,
};
// actions
const actions = {
  checkout({ commit, state }, products) {},
};
// mutations
const mutations = {
  mutation1(state, { id }) {},
};
export default {
  state,
  getters,
  actions,
  mutations,
};
