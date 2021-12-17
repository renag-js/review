<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽,挖个坑,等着组件的使用者来填充 -->
    <slot name="center">我一个默认值,当使用者没有指定具体结构时,我会出现1</slot>
    <slot name="footer">我一个默认值,当使用者没有指定具体结构时,我会出现2</slot>
  </div>
</template>

<script>
export default {
  name: "Categoty",
  props: ["title"],
  data() {
    return {};
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

