<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 可以给slot插槽里面利用属性值传递参数 -->
    <slot :games="games"> 我是默认的插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Categoty",
  props: ["title"],
  data() {
    return {
      games: ["LOL", "CF", "绝地求生", "扫雷"],
    };
  },
};
</script>

<style scoped lang="scss">
.category {
  background: skyblue;
  width: 200px;
  height: 300px;

  h3 {
    text-align: center;
    background: orange;
  }

  img {
    width: 100%;
  }
}
</style>

