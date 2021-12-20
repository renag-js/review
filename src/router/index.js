// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件 .vue后缀名可写可不写
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";
import Index from "../pages/Index.vue";

// 创建一个并暴露一个路由器
const router = new VueRouter({
  mode: "history", //可以借助此属性配置路由的工作模式,默认为hash模式,abstract模式,适用于所有JavaScript环境，例如服务器端和Node.js. 如果没有浏览器API，路由器将自动强制进入此模式。
  routes: [
    {
      name: "index",
      path: "/", // 默认显示首页的组件   ---想要默认展示的组件导航有高亮效果,to属性要用name写 而且属性里面得加上exact属性.默认展示可以展示给用户一打开页面就想给用户看的组件,要是不需要展示默认的组件,也可以不写,直接给用户展示一个固定欢迎词,后面正常写点击跳转的路由组件即可
      component: Index,
      meta: {
        title: "首页",
      },
    },
    {
      name: "about",
      path: "/about",
      component: About,
      meta: {
        title: "关于",
        isAuth: true,
      },
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: {
        title: "主页",
        isAuth: true,
      },
      // 一级路由的path需要加/,它的子路由不需要加/
      children: [
        {
          path: "message",
          component: Message,
          meta: {
            // 路由元信息---程序员可以自定义指定信息
            isAuth: true, // 是否授权
            title: "消息",
          },
          children: [
            {
              name: "detail",
              path: "detail", //params参数得声明占位
              component: Detail,
              meta: {
                title: "详情",
              },
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
          name: "news",
          path: "news",
          component: News,
          meta: {
            isAuth: true,
            title: "新闻",
          },
          // 独享路由守卫(只有一个,和全局写法有点不一样,注意)
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth == true) {
          //     //判断是否需要鉴权
          //     if (localStorage.getItem("school") == "atguigu") {
          //       next();
          //     } else {
          //       alert("学校名不对,无权限查看");
          //     }
          //   } else {
          //     next();
          //   }
          // },
        },
      ],
      // redirect: "/home/news",  可以展示进入二级路由后默认想要展示的组件
    },
  ],
});

// 全局路由守卫
// 全局前置路由守卫---每一次路由切换之前调用(初始化的时候也调用一次),里面写一个指定的函数,调用完beforeEach之后会帮你自动去执行这里面的函数
// to:你要去的那个路由组件的($route数据)信息---
// from:你来自那个路由组件的($route数据)信息
// next:放行---每次都得调用next()去放行,不然路由跳转会被拦截
// router.beforeEach((to, from, next) => {
//   //要是没有/默认页,要想让他出现刷新不读出项目名得去public里面的index.html里面改title
//   if (to.meta.isAuth == true) {
//     //判断是否需要鉴权
//     if (localStorage.getItem("school") == "atguigu") {
//       next();
//     } else {
//       alert("学校名不对,无权限查看");
//     }
//   } else {
//     next();
//   }
// });

// 全局后置路由守卫
// 全局前置路由守卫---每一次路由切换之后调用(初始化的时候也调用一次),里面写一个指定的函数,调用完afterEach之后会帮你自动去执行这里面的函数
// 后置路由守卫afterEach没有next
router.afterEach((to, from) => {
  document.title = to.meta.title || "后端管理系统"; //可以在切换完毕之后再改页面标题
});

export default router;
