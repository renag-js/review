<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img0.baidu.com/it/u=2064642481,3025974924&fm=26&fmt=auto"
        alt=""
      />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g, index) of games" :key="index">{{ g }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>


<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foots: ["火锅", "烧烤", "牛排", "肯德基"],
      games: ["LOL", "CF", "绝地求生", "扫雷"],
      films: ["《教父》", "《钢铁侠》", "《复仇者联盟》", "《美国队长》"],
    };
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-around;

  video {
    width: 100%;
  }
}
</style>
 
