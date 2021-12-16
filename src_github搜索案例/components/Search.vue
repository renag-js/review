<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="serachUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    serachUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        noUser: false,
        users: [],
      });
      let url = `https://api.github.com/search/users?q=${this.keyWord}`;
      axios.get(url).then(
        // 请求成功后List列表数据
        (response) => {
          console.log(response.data.items);
          if (response.data.items.length != 0) {
            this.$bus.$emit("updateListData", {
              isLoading: false,
              errMsg: "",
              noUser: false,
              users: response.data.items,
            });
            console.log(222);
          } else {
            this.$bus.$emit("updateListData", {
              isLoading: false,
              noUser: true,
              errMsg: "",
              users: response.data.items,
            });
            console.log(111);
          }
        },
        // 请求失败后List列表数据
        (error) => {
          console.log(error.message);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style scoped>
</style>
