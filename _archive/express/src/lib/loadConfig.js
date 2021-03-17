const fs = require("fs")
const { resolve } = require("path")
const path = require("path")
const yaml = require("yaml")


module.exports = function loadConfig() {
  const raw = fs.readFileSync(
    path.resolve(
      __dirname,
      "../CONFIG.yaml"
    ),
    "utf8"
  )
  return yaml.parse(raw)
}
