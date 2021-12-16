<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow" ref="h1">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
}
.hello-enter-active {
  animation: TestName 1s linear;
}

.hello-leave-active {
  animation: TestName 1s reverse;
}

@keyframes TestName {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
