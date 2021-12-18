<template>
  <div class="count">
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前求和放大10倍后为{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },

  computed: {
    // 靠程序员自己亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // 利用...展开运算符把mapState对象里面生成的属性放入到computed计算属性里面,mapState里面需要传入一个对象,其中对象每一项都是一组key,value,其中key是我们要生成的计算属性名,可以随便写,也可以带引号也可以使用简写不带引号,但是value是Vuex的state里面必须存在的属性,不能乱写,而且属性名必须带引号,不然会被识别成变量
    // 使用mapState辅助函数生成计算属性,从state里面的读取数据---(对象写法)
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法:意思是生成的计算属性名是sum,而且你要去Vuex的state里面读取的属性名也是sum,必须加引号
    ...mapState(["sum", "school", "subject"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 使用mapGetters辅助函数生成计算属性,从getters里面的读取数据(对象写法)
    // ...mapGetters({ bigSum: "bigSum" }),
    // 使用mapGetters辅助函数生成计算属性,从getters里面的读取数据(数组写法)
    ...mapGetters(["bigSum"]),
  },

  methods: {
    increment() {
      // 这里提交的increment函数必须在actions里有
      // 沒有业务逻辑的话可以直接调用commit去mutations
      this.$store.commit("INCREMENT", this.n);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    },
  },
};
</script> 



<style scoped lang="scss">
button {
  margin-left: 5px;
}
</style>