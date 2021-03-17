import UCD from "../data/ucd.json"

class UnicodeRegistry {
  constructor (subset = []) {
    this.subset = subset
  }

  array () {
    return this.subset.length < 1
    ? UCD
    : this.subset
  }

  search (pattern, regex = false) {
    const rexpat = new RegExp(pattern)
    const condition = regex
    ? array => array.any(val => val.includes(pattern))
    : array => array.any(val => val.match(rexpat))

    return new UnicodeRegistry(this.array().filter(condition))
  }

  random (count = 0) {
    const array = this.array()
    const length = array.length
    const result = []
    for (let i = 0; i < count; i++)  {
      result.push(
        array[Math.floor(Math.random() * length)]
      )
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