<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <!-- v-model的写法 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTodo }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cancelAll">
      清除全部已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "cancelAllTodoObj"],

  computed: {
    // 全部代办事项
    total() {
      return this.todos.length;
    },

    // 已完成代办事项
    doneTodo() {
      // 统计已完成的待办事项     pre是上一次函数调用之后的返回值     current是当前数组
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); // 0代表统计的初始值,是pre第一次的值
    },

    // 是否勾取全选   ---计算属性的完整写法
    isAll: {
      get() {
        return this.doneTodo === this.total && this.total > 0;
      },

      set(value) {
        this.checkAllTodo(value);
      },
    },
  },

  methods: {
    // 设置所有todoObj的done值为true
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },

    // 清除已完成待办事项
    cancelAll() {
      if (confirm("确定清除全部已完成事项吗?")) {
        this.cancelAllTodoObj();
      }
    },
  },
};
</script>

<style scoped lang="scss">
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;

  label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;

    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
}
</style>
