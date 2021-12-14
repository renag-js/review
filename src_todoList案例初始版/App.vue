<template>
  <div id="app">
    <div class="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addTodo="addTodo" :todos="todos" />
          <MyList
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
          />
          <MyFooter
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :cancelAllTodoObj="cancelAllTodoObj"
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
      todos: [
        { id: "001", title: "javascript", done: true },
        { id: "002", title: "vue", done: false },
        { id: "003", title: "react", done: true },
      ],
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

    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todoObj) => (todoObj.done = done));
    },

    // 清除已完成代办事项
    cancelAllTodoObj() {
      this.todos = this.todos.filter((todoObj) => !todoObj.done);
    },
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
 
