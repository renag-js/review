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
      name: "about",
      path: "/", //默认显示首页的组件   ---想要默认展示的组件导航有高亮效果,to属性要用name写 而且属性里面得加上exact属性.默认展示可以展示给用户一打开页面就想给用户看的组件,要是不需要展示默认的组件,也可以不写,直接给用户展示一个固定欢迎词,后面正常写点击跳转的路由组件即可
      component: About,
    },
    // {
    //   name: "about",
    //   path: "/about",
    //   component: About,
    // },
    {
      name: "home",
      path: "/home",
      component: Home,
      // 一级路由的path需要加/,它的子路由不需要加/
      children: [
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "detail",
              path: "detail", //params参数得声明占位
              component: Detail,
              // props的第一种写法:值为对象,该对象中的所有key,value都会以props形式传给Detail组件
              // props: { a: 1, b: "hello" },

              //props的第二种写法:值为布尔值,若布尔值为真,就会把该路由组件收到的params参数,以props的形式传给Detail组件
              // props: true,

              // props的第三种写法:值为函数,会收到一个参数就是该组件的$route,该函数中对象的所有key,value都会以props形式传给Detail组件
              //解构赋值的连续写法
              // props({ quer: { id, title } }) {
              //   return { id, title };
              // },
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
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
