<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- to里面写的路径需要和path里面的匹配上 二级路由要是用to属性,需要带着一级路由的路径-->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- keep-alive标签可用于缓存组件,不加include属性,默认缓存keep-alive标签里的所有组件内容,include标签里面写组件名 -->
      <!-- :include="[News,Message]"    数组写法,可写多个缓存的路由组件-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>