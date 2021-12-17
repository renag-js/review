<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img0.baidu.com/it/u=2064642481,3025974924&fm=26&fmt=auto"
        alt=""
        slot="center"
      />
      <div slot="footer" class="foot">
        <a href="#" slot="footer">更多美食</a>
      </div>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) of games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div slot="footer" class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观看!</h4>
      </template>
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
 
