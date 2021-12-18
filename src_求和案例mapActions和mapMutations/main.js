import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// 引入插件
import vueResource from "vue-resource";

Vue.config.productionTip = false; //关闭Vue的生产提示

// 使用插件
Vue.use(vueResource); //一个发送请求的库,和axios差不多

new Vue({
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //配置全局事件总线
  },
}).$mount("#app");
