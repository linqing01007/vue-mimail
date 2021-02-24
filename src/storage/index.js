/*
  sessionStorage 数据结构： attrName: value(string)
  'user': "{'name': 'n', 'age': 13}"
  'product': "{'name': 'n', 'detail': 'asdfasd'}"
*/

const STORAGE = window.sessionStorage

const storage = {
  getStorage (moduleName) {
    return JSON.parse(STORAGE.getItem(moduleName) || '{}')
  },
  get (moduleName, key) {
    const obj = this.getStorage(moduleName)
    if (obj && Reflect.has(obj, key)) {
      return obj[key]
    }
    return ''
  },
  set (moduleName, key, val) {
    const obj = this.getStorage(moduleName)
    let oldVal = ''
    if (Reflect.has(obj, key)) {
      oldVal = obj[key]
    }
    obj[key] = val
    STORAGE.setItem(moduleName, JSON.stringify(obj))
    return oldVal
  }
}

export default storage
