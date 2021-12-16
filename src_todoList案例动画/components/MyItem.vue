<template>
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
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input
        type="text"
        :value="todoObj.title"
        v-show="todoObj.isEdit"
        ref="inputTitle"
        @blur="handlerBlur(todoObj, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
      删除
    </button>
    <button
      class="btn btn-edit"
      @click="hanlderEdit(todoObj)"
      v-show="!todoObj.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pusuub from "pubsub-js";
export default {
  name: "MyItem",
  // props里面写属性名
  props: ["todoObj", "todos"],
  data() {
    return {
      title: "", //用户输入的value值
    };
  },

  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知APP组件将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },

    // 删除代办事项
    handleDelete(id) {
      // 直接把回调函数用箭头函数的形式写在绑定自定义事件的后面,这里必须用箭头函数,不然会有this指向问题
      this.$bus.$on("getUserInputValue", (title) => {
        // this.title = title; //  在这里掉过坑,一定要先绑定再触发事件(在这里我吧问题复杂化了,有更简单的写法,以后要多比较)
      });
      this.$bus.$emit("sendMessage", id);

      this.todos.forEach((todoObj) => {
        if (id == todoObj.id) this.title = todoObj.title;
      });
      if (confirm(`确定删除待办事项:${this.title}吗?`)) {
        // this.$bus.$emit("deleteTodo", id);
        // 消息发布
        pusuub.publish("deleteTodo", id);
        // 通知APP组件删除对应的待办事项
        // this.deleteTodo(id);
      }
    },

    // 编辑
    hanlderEdit(todoObj) {
      // switch写法  ---hasOwnProperty判断指定对象里有没有指定的属性
      switch (todoObj.hasOwnProperty("isEdit")) {
        case false:
          // 给todoObj身上痛$set添加一个响应式的属性isEdit
          this.$set(todoObj, "isEdit", true);
          console.log(todoObj.isEdit);
          break;

        default:
          todoObj.isEdit = true;
          break;
      }

      // if写法
      // if (todoObj.hasOwnProperty("isEdit")) {
      //   todoObj.isEdit = true;
      //   console.log(111);
      // } else {
      //   this.$set(todoObj, "isEdit", true);
      //   console.log(222);
      // }

      // 要是直接这样鞋,此时input还没有挂载到页面,是隐藏状态,一个隐藏状态的input调用focus获取焦点是没有作用的
      // 可以借助一个API:$nickTick:他里面的callBack会在下一轮DOM更新完毕的时候再执行,也就是下一轮才会执行
      this.$nextTick(() => this.$refs.inputTitle.focus());
    },

    // 文本框失去焦点(真正执行修改逻辑的地方)
    handlerBlur(todoObj, e) {
      todoObj.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodoObj", todoObj.id, e.target.value);
    },
  },

  beforeDestroy() {
    // 组件销毁的时候解绑自定义事件
    this.$bus.$off("getUserInputValue");
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

li:hover {
  background: #ddd;
  button {
    display: block;
  }
}
</style>
