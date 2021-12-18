<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件的求和为:{{ sum }}</h3>
    <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人,名字随机</button>
    <ul>
      <li v-for="p of personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },

    firstPersonName() {
      // 不用map辅助函数的模块化编码的计算属性的写法
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },

  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      // 要是不用map函数去简写,就只能像下方这种写法去写,/前面作为分类名,/后面作为mutations里面的函数名
      this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addPersonWang", personObj);
      this.name = "";
    },

    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
};
</script>

<style scoped>
</style>