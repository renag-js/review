module.exports = {
  lintOnSave: false, //关闭语法检查

  // 开启服务器代理
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: { "^/api": "" },
        ws: true, //用于支持webSocket   即时通讯
        changeOrigin: true, //用于配置请求头中的Host字典
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        //ws: true, //用于支持webSocket   即时通讯
        //changeOrigin: true, //用于配置请求头中的Host字典
      },
    },
  },
};
