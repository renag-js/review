import Vue from "vue";
import App from "./App.vue";
// 引入插件VueRouter
// 引入插件ElementUi组件库(插件)---完整引入
// import ElementUI from "element-ui";
// 引入ElementUi的全部样式
// import "element-ui/lib/theme-chalk/index.css";

// 按需引入---样式不用引入,脚手架会自动分析帮你引入
// 注意:按需引入需要更改babel.config.js的配置成最新版写法
import { Button, Select, Row, DatePicker } from "element-ui";

Vue.config.productionTip = false; //关闭Vue的生产提示

// 使用插件
// Vue.use(ElementUI);

// 注册全局组件, 组件的名字:Button.name,可以自己写,例如renaogui-button,在使用组件的时候就需要renaogui-button组件名
Vue.component("renaogui-button", Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  render: (h) => h(App),
}).$mount("#app");
