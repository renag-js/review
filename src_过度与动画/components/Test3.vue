<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name可以给transition标签起名称,再多个标签里使用多个不同的动画样式的时候有用,加上appear属性在页面初始展示的时候Vue会自动给元素加上进入时的动画效果 -->
    <!-- transition标签里有多个元素的话必须改为transition-group,里面还必须加上唯一的key值 -->
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backInUp"
    >
      <h1 v-show="!isShow" ref="h1" key="1">你好啊</h1>
      <h1 v-show="isShow" ref="h1" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
  /* transition: 0.5s linear;  也可以把动画效果加给要动画效果的元素本身*/
}
</style>
