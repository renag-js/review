// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件 .vue后缀名可写可不写
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";

// 创建一个并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/", //默认显示的组件
      component: About,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      // 一级路由的path需要加/,它的子路由不需要加/
      children: [
        {
          path: "message",
          component: Message,
          children: [
            {
              path: "detail",
              component: Detail,
            },
          ],
        },
        {
          path: "news",
          component: News,
        },
      ],
    },
  ],
});
