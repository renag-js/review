import Vue from "vue";
import App from "./App.vue";
// 引入插件VueRouter
import VueRouter from "vue-router";
// 引入路由器
import router from "./router";

Vue.config.productionTip = false; //关闭Vue的生产提示

// 使用插件
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
