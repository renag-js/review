// 改文件用于创建Vuex中最为核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 准备store---用于存储数据
const state = {
  sum: 0,
  school: "尚硅谷",
  subject: "前端",
};

// 准备actions---用于响应组件中的动作
const actions = {
  //context上下文的一下,相当于一个迷你版的store,value是传过来的值
  //这里有没有业务逻辑的话可以不用写actions,直接在组件的函数方法里面调用commit去mutations
  // increment(context, value) {
  //   // 这里提交的INCREMENT函数必须在mutations里有
  //   context.commit("INCREMENT", value);
  // },

  // decrement(context, value) {
  //   context.commit("DECREMENT", value);
  // },
  //可以在actions里面连续调用dispatch多个,意思就是一个actions里的一个函数处理不完的逻辑,继续dispatch调用下个函数再来继续处理逻辑,处理完了再来commit去调用mutations
  //actions里面可以去操作state里的数据,但是会导致Vue开发者工具捕获不到,所以最好不要这样写
  //actions里面还可以去发一些异步的请求

  // 业务逻辑写在actions里
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("INCREMENT", value);
    }
  },

  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("INCREMENT", value);
    }, 300);
  },
};

// 准备mutations---用于操作数据
const mutations = {
  // mutations里面的函数名一般大写,为了区分actions与mutatoions
  // mutations里面去写一些同步的操作
  INCREMENT(state, value) {
    state.sum += value;
  },

  DECREMENT(state, value) {
    state.sum -= value;
  },
};

// 准备getters---用于将state中的数据进行加工     相当于Vue的computed计算属性
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 创建store,并导出store
export default new Vuex.Store({ state, actions, mutations, getters });
