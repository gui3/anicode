
const fs = require("fs")
const path = require("path")

module.exports = function saveData (data, filepath) {

  fs.writeFileSync(
    path.join(__dirname, "../../../public/data", filepath),
    data,
    "utf-8"
  )

}