<template>
  <div id="app">
    <div class="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader @addTodo="addTodo" :todos="todos" />
          <MyList :todos="todos" />
          <MyFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @cancelAllTodoObj="cancelAllTodoObj"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";
export default {
  name: "App",
  components: { MyHeader, MyFooter, MyList },

  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [], //从本地浏览器中获取todos,并转为对象
      title: "", //用户输入的值
    };
  },

  methods: {
    // 添加一个代办事项
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    // 勾选or取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todoObj) => {
        // 找到对应的todo对象的的done值取反
        if (id === todoObj.id) todoObj.done = !todoObj.done;
      });
    },

    // 删除一个待办事项
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => id != todo.id);
    },

    // 获取item组件的id来通过id给item组件传递title
    sendUserInputValue(id) {
      this.todos.forEach((todoObj) => {
        if (id == todoObj.id) this.title = todoObj.title;
      });
      console.log("@@@", this.title);
      this.$bus.$emit("getUserInputValue", this.title);
    },

    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todoObj) => (todoObj.done = done));
    },

    // 清除已完成代办事项
    cancelAllTodoObj() {
      this.todos = this.todos.filter((todoObj) => !todoObj.done);
    },
  },

  watch: {
    // 利用watch监视属性获取到新的todos,value是最新的todos
    todos: {
      // 开启深度监视,vue默认watch是不开启深度监视,深度监视必须完整版写法,不能简写
      deep: true,
      // 完整版写法此方法名不能乱写,必须写handler,vue规定,里面的参数value是最新的todos,可以有两个参数,newValue,olderValue
      handler(value) {
        // 将todos保存到本地浏览器中,并转为JSON字符串
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  mounted() {
    // 通过全局事件总线给APP组件绑定自定义事件
    // 删除
    this.$bus.$on("deleteTodo", this.deleteTodo);
    // 勾选
    this.$bus.$on("checkTodo", this.checkTodo);
    // 获取用户输入的值给item组件
    this.$bus.$on("sendMessage", this.sendUserInputValue);
  },

  beforeDestroy() {
    // 组件销毁的时候解绑$bus身上的自定义事件
    this.$bus.$off(["deleteTodo", "deleteTodo", "sendUserInputValue"]);
  },
};
</script>

<style lang="scss">
// base
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
 
