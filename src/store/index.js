import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    formData: [],
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    },
    setFormData: (state, payload) => {
      state.formData = payload;
    },
  },
  actions: {
    setUserAction: (state, payload) => {
      state.commit('setUsers', payload);
    },
    setFormAction: (state, payload) => {
      state.commit('setFormData', payload);
    },
  },
  modules: {
  },
  getters: {
    getListOfUsers: (state) => state.users,
    getFormData: (state) => state.formData,
  },
});
