// const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  // // 外网地址
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: "http://1.116.129.108:9080",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '/api': ''
  //     }
  //   })
  // )
  // // 本机地址
  // app.use(
  //   '/local',
  //   createProxyMiddleware({
  //     target: "http://localhost:8801",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '/local': ''
  //     }
  //   })
  // )
}