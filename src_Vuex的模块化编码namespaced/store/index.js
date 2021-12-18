// 改文件用于创建Vuex中最为核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
import countOptions from "./modules/count";
import personOptions from "./modules/person";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// 使用Vuex插件
Vue.use(Vuex);

// 创建store,并导出store
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules: {
    countOptions,
    personOptions,
  },
});
