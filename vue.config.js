module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/search': {
                //代理地址，这里设置的地址会替代axios中设置的baseurl
                target: 'https://www.imooc.com',
                // secure: true,
                //如果接口跨域，则需要进行这个参数配置
                changeOrigin: true,
                pathRewrite: {
                    '^/search': '/search'
                } 
            }
        }
    }
}