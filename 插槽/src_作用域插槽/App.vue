<template>
  <div class="container">
    <Category title="游戏">
      <!-- 作用域插槽必须外面用template标签包裹,里面写上scope属性,他的值可以随便写,是一个对象,里面包含着slot标签里的属性,这里的scope值可以随便写 -->
      <template scope="a">
        <ul>
          <li v-for="(g, index) of a.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 解构赋值写法 -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(g, index) of games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 新写法:slot-scope -->
      <template slot-scope="{ games }">
        <h4 v-for="(g, index) of games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>
  </div>
</template>


<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
  name: "App",
};
</script>

<style lang="scss">
.container,
.foot {
  display: flex;
  justify-content: space-around;

  video {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
}
</style>
 
