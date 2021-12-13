<template>
  <ul class="todo-main">
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todoObj.done"
          @change="handleCheck(todoObj.id)"
        />

        <!-- 如下代码也可以实现勾选功能,但是不太推荐,因为有点违背原则,,因为修改了props   ---vue不让我们直接去修改props里的数据 -->
        <!-- props里的数据要是一个对象的话,去修改里面的数据,vue监测不到,所以不会报错,
        但是要是props基本类型数据的话,直接去修改,vue会报错 -->
        <!-- <input type="checkbox" v-model="todoObj.done" /> -->
        <span>{{ todoObj.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
        删除
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyItem",
  // props里面写属性名
  props: ["todoObj", "checkTodo", "deleteTodo"],
  data() {
    return {};
  },

  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知APP组件将对应的todo对象的done值取反
      this.checkTodo(id);
    },

    // 删除代办事项
    handleDelete(id) {
      if (confirm(`确定删除吗?`)) {
        // 通知APP组件删除对应的待办事项
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style scoped lang="scss">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;

  label {
    float: left;
    cursor: pointer;

    input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    i:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
  }
  button {
    float: right;
    display: none;
    margin-top: 3px;
  }
}

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

li:hover {
  background: #ddd;
  button {
    display: block;
  }
}
</style>
