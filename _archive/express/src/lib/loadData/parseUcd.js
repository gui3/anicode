module.exports = function parseUcd (txt) {
  return txt.split("\n")
    .map(row => {
      return row.split(";")
    })
}