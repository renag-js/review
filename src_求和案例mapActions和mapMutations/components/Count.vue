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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },

  computed: {
    // 利用...展开运算符把mapState对象里面生成的属性放入到computed计算属性里面,mapState里面需要传入一个对象,其中对象每一项都是一组key,value,其中key是我们要生成的计算属性名,可以随便写,也可以带引号也可以使用简写不带引号,但是value是Vuex的state里面必须存在的属性,不能乱写,而且属性名必须带引号,不然会被识别成变量
    // 使用mapState辅助函数生成计算属性,从state里面的读取数据---(对象写法)
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法:意思是生成的计算属性名是sum,而且你要去Vuex的state里面读取的属性名也是sum,必须加引号
    ...mapState(["sum", "school", "subject"]),
    // 使用mapGetters辅助函数生成计算属性,从getters里面的读取数据(对象写法)
    // ...mapGetters({ bigSum: "bigSum" }),
    // 使用mapGetters辅助函数生成计算属性,从getters里面的读取数据(数组写法)
    ...mapGetters(["bigSum"]),
  },

  methods: {
    // 程序员亲自写方法
    // increment() {
    // 这里提交的increment函数必须在actions里有
    // 沒有业务逻辑的话可以直接调用commit去mutations
    // this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },

    // 借助mapMuattions辅助函数去生成对应的方法,方法中会调用commit去联系mutations,要是生成的方法中有传递参数的话则要在模板中绑定事件的时候把参数传递进来,不然会默认传入event事件---比如increment方法需要传递参数(对象写法)
    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),
    // 借助mapMuattions辅助函数去生成对应的方法,方法中会调用commit去联系mutations(数组写法)
    // 方法名必须和mutations里的方法名一致
    // ...mapMutations(["INCREMENT", "DECREMENT"]),

    /* **********************************************************  */

    // 程序员亲自调用方法
    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },

    // 借助mapActions辅助函数去生成对应的方法(对象写法),前面是需要生成的方法名,后面是actions里定义的方法名
    // ...mapActions({
    //   incrementOdd: "incrementOdd",
    //   incrementWait: "incrementWait",
    // }),

    // 借助mapActions辅助函数去生成对应的方法(数组写法),方法名必须和actions里保持一致,列如incrementOdd
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
};
</script> 



<style scoped lang="scss">
button {
  margin-left: 5px;
}
</style>