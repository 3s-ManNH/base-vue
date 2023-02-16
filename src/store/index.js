import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    listBlog: [],
    blogDetail: {},
    isLogin: false,
  },
  getters: {},
  mutations: {
    getListBlog(state, blogs) {
      state.listBlog = blogs;
    },

    getBlogDetail(state, blogs) {
      state.blogDetail = blogs;
    },

    getLogin(state, isLogin) {
      state.isLogin = isLogin
    }
  },
  actions: {
    getListBlog({ commit }) {
      const baseURL = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs";
      axios.get(baseURL).then((response) => {
        commit("getListBlog", response.data);
      });
    },

    getBlogDetail({ commit }, id) {
      const baseURL = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs";
      axios.get(baseURL + "/" + id).then((response) => {
        commit("getBlogDetail", response.data);
      });
    },

    getLogin({ commit }) {
      commit("getLogin", true);
    },
  },
  modules: {},
});
