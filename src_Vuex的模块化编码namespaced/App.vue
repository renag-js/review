<template>
  <div class="container">
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  components: { Count, Person },

  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>