<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      students: "",
    };
  },
  methods: {
    getStudents() {
      let getStudentsUrl = "http://localhost:8080/api/students";
      axios.get(getStudentsUrl).then(
        // 成功的回调
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败的回调
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      let getCarsUrl = "http://localhost:8080/demo/cars";
      axios.get(getCarsUrl).then(
        // 成功的回调
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败的回调
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style lang="scss">
</style>
 
