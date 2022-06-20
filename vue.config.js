const { defineConfig } = require('@vue/cli-service')
// webpack+node环境 - 导出配置对象
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave是用来规范代码的好东西，对于代码开发十分严格
  // 比如有一个变量没有使用，多了一个空格，都会报错
  // 设置是否在开发环境下每次保存代码时都启用 eslint验证。
  lintOnSave: false,
  devServer: {
    // 改变端口号会改变8000为0000.需要添加说明
    host: "localhost",// 设置启动项目网址
    port: 8888,// 设置启动项目端口号
    open: true,// 设置是否自动打开浏览器
  },
})
