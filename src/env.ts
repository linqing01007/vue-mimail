let baseURL = ''

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    console.log('development.......')
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    console.log('test........')
    break
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api'
    console.log('prod..........')
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    console.log('default.........')
    break
}

export default {
  baseURL
}
