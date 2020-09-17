module.exports = {
    devServer: {
        host: 'localhost', //使用npm run serve 启动的服务器地址
        port: 8080,  // 监听的端口号，默认8080
        proxy: {
            '/article': {
                //代理地址，这里设置的地址会替代axios中设置的baseurl
                target: 'http://www.imooc.com',
                // secure: true,
                //如果接口跨域，则需要进行这个参数配置
                changeOrigin: true,
                pathRewrite: {
                    '^/article': '/article'
                } 
            }
        }
    }
}