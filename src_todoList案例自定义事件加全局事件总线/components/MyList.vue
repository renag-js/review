<template>
  <div>
    <!-- :todoObj是属性名,可以随便写,但是后面的todoObj是要传递的属性值,不可以随便写 -->
    <MyItem
      v-for="todoObj of todos"
      :key="todoObj.id"
      :todoObj="todoObj"
      :todos="todos"
    />
  </div>
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
</style>
