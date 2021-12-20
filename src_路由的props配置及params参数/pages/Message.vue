<template>
  <div>
    <ul>
      <li v-for="item of messageList" :key="item.id">
        <!-- 跳转路由并携带params参数,to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link> -->
        <!-- 跳转路由并携带params参数,to的对象写法 外面大对象必须用双引号,里面的path路径必须用单引号-->
        <!-- <router-link
          :to="{
            name: 'detail', //params参数必须使用name
            params: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link
        > -->

        <router-link
          :to="{
            name: 'detail',
            query: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link
        >
        &nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>