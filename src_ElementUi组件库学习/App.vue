<template>
  <div>
    <button>原生的按钮</button>
    <input type="text" />
    <el-row>
      <renaogui-button>默认按钮</renaogui-button>
      <renaogui-button type="primary">主要按钮</renaogui-button>
      <renaogui-button type="success">成功按钮</renaogui-button>
      <renaogui-button type="info">信息按钮</renaogui-button>
      <renaogui-button type="warning">警告按钮</renaogui-button>
      <renaogui-button type="danger">危险按钮</renaogui-button>
    </el-row>
    <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
    <el-row>
      <renaogui-button icon="el-icon-search" circle></renaogui-button>
      <renaogui-button
        type="primary"
        icon="el-icon-video-camera"
        circle
      ></renaogui-button>
      <renaogui-button
        type="success"
        icon="el-icon-check"
        circle
      ></renaogui-button>
      <renaogui-button
        type="info"
        icon="el-icon-message"
        circle
      ></renaogui-button>
      <renaogui-button
        type="warning"
        icon="el-icon-star-off"
        circle
      ></renaogui-button>
      <renaogui-button
        type="danger"
        icon="el-icon-delete"
        circle
      ></renaogui-button>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},

  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>