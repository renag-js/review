module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"], // presets:预设的意思
  // presets: [["es2015", { modules: false }]], //老版本脚手架写法
  presets: [["@babel/preset-env", { modules: false }]], //新版写法
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
