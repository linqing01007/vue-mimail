const STORAGE_KEY = 'mall'

export default {
    getItem (key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            return val[key]
        }
        return this.getStorage()[key]
    },
    setItem (key, value, module_name) {
        let val = this.getStorage()
        if (module_name) {
            val[module_name][key] = value
        } else {
            val[key] = value
        }
        val = JSON.stringify(val)
        window.sessionStorage.setItem(STORAGE_KEY, val)
    },
    getStorage () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear (key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            console.log('1111', val[module_name])
            if (!val[module_name]) reutrn
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        val = JSON.stringify(val)
        window.sessionStorage.setItem(STORAGE_KEY, val)
    }
}
