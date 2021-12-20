<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="go">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward(); //前进
    },
    back() {
      this.$router.back(); //后退
    },
    go() {
      this.$router.go(0); //可前进,可后退---写正数就是前进几次,写负数就是后退几次,默认不写或者写0就是刷新页面
    },
  },
};
</script>

<style>
</style>