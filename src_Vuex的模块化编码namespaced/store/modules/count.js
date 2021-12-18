// 求和相关的配置
export default {
  namespaced: true, //开启命名空间
  actions: {
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
  },
  mutations: {
    // mutations里面的函数名一般大写,为了区分actions与mutatoions
    // mutations里面去写一些同步的操作
    INCREMENT(state, value) {
      state.sum += value;
    },

    DECREMENT(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
