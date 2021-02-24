module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: {
      '/api': {
        target: 'https://mall-pre.springboot.cn',  // 后台真实地址
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}