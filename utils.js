/* Debouncing an input: waiting for some time to pass after last event to actually do something */
const debounce = (func, delay = 1000) => {
  let timeoutId
  return (...args) => {
    timeoutId && clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(null, args) // = func.apply(func, args)
    }, delay)
  }
}