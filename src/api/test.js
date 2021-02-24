import AxiosInstance from './index'

const get = function (url, params) {
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

const post = function (url, params) {
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
