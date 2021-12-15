<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入您的任务名称,按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  props: ["todos"],
  data() {
    return {
      title: "",
      // 是否已有该代办事项,默认值为false
      isContainTodoObj: false,
    };
  },

  methods: {
    add() {
      // 判断用户输入是否为空
      if (!this.title) return alert("输入不能为空");

      // 判断当前数组里面是否已包含该代办事项
      this.todos.forEach((todoObj) => {
        if (this.title == todoObj.title) {
          this.isTodoObj = true;
        }
      });

      if (this.isTodoObj) {
        this.isConfirm = confirm(`已包含待办事项:${this.title},是否还要添加`);
      }

      // 判断已有待办事项用户是否点击确认,或者还没有待办事项
      if (this.isConfirm || !this.isTodoObj) {
        // 把用户输入的待办事项包装成一个对象
        const todoObj = {
          id: nanoid(),
          title: this.title.trim(),
          done: false,
        };

        // 给APP组件传递一个todo对象  自定义事件写法,用$emit触发,后面跟参数,可以有多个
        this.$emit("addTodo", todoObj, 1, 2, 3);

        // 用户输入完毕之后让输入框为空
        this.title = "";
        this.isTodoObj = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
/*header*/
.todo-header {
  input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
}
</style>
