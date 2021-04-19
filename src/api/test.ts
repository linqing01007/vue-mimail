import AxiosInstance from './index'

const get = function (url: string, params: object) {
  return new Promise((resolve, reject) => {
    AxiosInstance.get(url, {
      params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

const post = function (url: string, params?: object) {
  return new Promise((resolve, reject) => {
    AxiosInstance.post(url, params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  get,
  post
}
