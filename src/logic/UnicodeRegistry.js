import UCD from "../data/ucd.json"

class UnicodeRegistry {
  constructor (subset = false) {
    this.subset = subset
  }

  array () {
    return this.subset instanceof Array
    ? this.subset
    : UCD
  }

  search (pattern, regex = false) {
    pattern = pattern.toLowerCase()
    const rexpat = new RegExp(pattern)
    const condition = regex
    ? array => array.some 
      && array.some(val => val.toLowerCase().match(rexpat))
    : array => array.some 
      && array.some(val => val.toLowerCase().includes(pattern))

    const filtered = this.array().filter(condition) || []

    return new UnicodeRegistry(filtered)
  }

  random (count = 0) {
    const array = this.array()
    const length = array.length
    const result = []
    const done = []
    let i = 0
    while (i < count && i < length)  {
      const rand = Math.floor(Math.random() * length)
      if (!done.includes(rand)) {
        done.push(rand)
        result.push(
          array[rand]
        )
        i++
      }
    }
    return new UnicodeRegistry(result)
  }

  getRange (start = 0, range = 100) {
    return new UnicodeRegistry(this.array().slice(start, start + range))
  }

  map (callback) {
    return this.array().map(callback)
  }
}

export default UnicodeRegistry