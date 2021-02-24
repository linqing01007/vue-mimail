import axios from 'axios'
// import env from '../env'

const AxiosInstance = axios.create({
  baseURL: '/api', // env.baseURL,
  timeout: 8000
})

AxiosInstance.interceptors.request.use(function (config) {
  // 在发送请求前做点什么
  console.log('before request: ', config)
  return config // 必须返回
}, function (error) {
  // 请求错误的处理(http错误)
  return Promise.reject(error)
})

AxiosInstance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data
  } else {
    console.log('http status error')
    return Promise.reject(response.status)
  }
})

export default AxiosInstance
