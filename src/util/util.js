const debounce = function (func, wait = 500) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(func, ...args)
    }, wait)
  }
}
export {
  debounce
}
