const STORAGE_KEY = 'mall'

export default {
  getItem (key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      return val[key]
    }
    return this.getStorage()[key]
  },
  setItem (key, value, moduleName) {
    let val = this.getStorage()
    if (moduleName) {
      val[moduleName][key] = value
    } else {
      val[key] = value
    }
    val = JSON.stringify(val)
    window.sessionStorage.setItem(STORAGE_KEY, val)
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, moduleName) {
    let val = this.getStorage()
    if (moduleName) {
      console.log('1111', val[moduleName])
      if (!val[moduleName]) return
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    val = JSON.stringify(val)
    window.sessionStorage.setItem(STORAGE_KEY, val)
  }
}
