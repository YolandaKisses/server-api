const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // build输出目录
  outputDir: 'dist',
  // 放置静态文件夹目录
  assetsDir: 'static',
  // 是否开启eslint保存检测
  lintOnSave: false, 
  // 是否在构建生产包时生成sourcdeMap
  productionSourceMap: false, 
  // 开发服务器
  devServer: {
    // npm run serve 时是否直接打开浏览器
    open: true,
    // 开发运行时的端口
    port: '8081',
    // 是否启用 https
    https: false,
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的 http://ip:port/...访问你的项目
    host: '0.0.0.0',
    // 跨域
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // 反向代理
    proxy: {
      [`${process.env.VUE_APP_BASE_API}`]: {
        // 代理服务地址
        target: process.env.VUE_APP_SERVER_API,
        //是否跨域
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      // 路径别名
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@utils': resolve('src/utils')
      }
    }
  }
}
