<template>
  <ul class="todo-main">
    <!-- :todoObj是属性名,可以随便写,但是后面的todoObj是要传递的属性值,不可以随便写 -->
    <transition-group name="todoObj" appear>
      <MyItem
        v-for="todoObj of todos"
        :key="todoObj.id"
        :todoObj="todoObj"
        :todos="todos"
      />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"],

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todoObj-enter-active {
  animation: TestName 0.3s linear;
}

.todoObj-leave-active {
  animation: TestName 0.3s reverse;
}

// 定义动画  ---写在item里面删除时动画不生效,有时间回来研究一下
@keyframes TestName {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
