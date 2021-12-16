<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      class="card"
      v-for="user in info.users"
      :key="user.id"
      v-show="info.users.length"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <!-- 展示loading -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    <!-- 没有相关用户信息 -->
    <h1 v-show="info.noUser">没有相关用户信息</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true, //是否初次展示
        isLoading: false, //是否展示loading
        errMsg: false, //是否展示错误信息
        noUser: false, //没有用户
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      // 合并对象,以后面的对象为主,要是...dataObj和里...this.info里面有重名的属性,就以dataObj的为主,没有就添加
      this.info = { ...this.info, ...dataObj };
      console.log(this.info, "***");
      console.log(dataObj, "+++");
      console.log(this.info.noUser);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
