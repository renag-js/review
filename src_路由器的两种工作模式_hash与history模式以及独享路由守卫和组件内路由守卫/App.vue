<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->
          <!-- Vue中借助router-link实现路由的切换 -->
          <!-- 默认展示的组件样式必须加exact,不然切换的时候默认组件的样式不会丢失 -->
          <router-link
            to="/"
            class="list-group-item"
            active-class="active"
            :to="{ name: 'index' }"
            exact
          >
            默认展示页面(首页)
          </router-link>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{ name: 'about' }"
            >About</router-link
          >
          <!-- 默认浏览器开启的是push模式,开启replace模式需要写replace属性---完整写法:replace:"true" -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home"
            replace
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  components: { Banner },

  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>