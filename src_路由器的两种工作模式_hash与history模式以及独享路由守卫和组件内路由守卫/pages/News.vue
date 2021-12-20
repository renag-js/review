<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // },

  // beforeDestroy() {
  //   clearInterval(this.timer);
  //   console.log('组件即将被卸载')
  // },

  // 路由组件独有的两个生命周期
  // 路由组件激活时调用     ---还有一个生命周期,所有组件都可用使用,$nextTick,作用:在下一轮DOM节点更新挂载完毕之后执行,通俗点讲就是,本次解析模板,执行方法时不调用,先去执行主程序的代码,然后在下一轮DOM更新挂载完毕之后的时候立刻调用
  // 或者这样说,就是当你操作完数据之后,Vue操作完DOM之后,把真实DOM放入到页面了之后再帮你调用这个函数
  activated() {
    console.log("组件被激活了");
    this.timer = setInterval(() => {
      // console.log(222);
      // 定时器属于宏任务
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
    //$nextTick属于微任务
    // this.$nextTick(() => {
    //   console.log(111);
    // });
  },
  // 路由组件失活时调用
  deactivated() {
    console.log("组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>