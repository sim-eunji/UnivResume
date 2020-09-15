import _ from 'lodash'

/**
 * @param {string} prefix 
 */
export const generateUniqueId = prefix => {
  return _.uniqueId(`${prefix ? prefix + '-' : ''}${_.random(1e14, 1e15-1).toString(16)}-`)
}

/**
 * @param {string | object | object[]} a 
 * @param {string | object | object[]} b 
 */
export const merge = (a, b, ...args) => {
  let merged = args[0] ?? {}
  const props = [ a, b ]

  props.forEach(c => {
    if(typeof c === 'string') {
      mergeString(c, merged)
    } else if(c instanceof Array) {
      c.forEach(k => {
        merged = Object.assign(merge(k), merged)
      })
    } else if(typeof c === 'object' && c !== null & c !== undefined) {
      merged = mergeObject(c, merged)
    }
  })

  return merged
}

const mergeString = (k, o) => {
  if(k.match(':')) {
    const [ key, value ] = k.split(':')

    o[key.trim()] = value.trim()
  } else {
    o[k] = true
  }
}
const mergeObject = (a, o) => Object.assign(a, o)
