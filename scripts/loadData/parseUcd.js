module.exports = function parseUcd (txt) {
  // return txt.split("\n")
  //   .map(row => {
  //     return row.split(";")
  //   })

  const parsed = []
  
  txt
  .split("\n")
  .forEach(row => {
    const unicodeChar = {}
    row.split(",")
    .forEach((value, ix) => unicodeChar[ix] = value)
    parsed.push(unicodeChar)
  })

  return parsed
}