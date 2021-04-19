/*
  sessionStorage 数据结构： attrName: value(string)
  'user': "{'name': 'n', 'age': 13}"
  'product': "{'name': 'n', 'detail': 'asdfasd'}"
*/

const STORAGE = window.sessionStorage

const storage = {
  getStorage (moduleName: string) {
    return JSON.parse(STORAGE.getItem(moduleName) || '{}')
  },
  get (moduleName: string, key: string) {
    const obj = this.getStorage(moduleName)
    if (obj && Reflect.has(obj, key)) {
      return obj[key]
    }
    return ''
  },
  set (moduleName: string, key: string, val: any) {
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
