const fs = require("fs")
const path = require("path")

module.exports = function saveLoadStats () {
  const statsPath = path.join(__dirname, "../../../public/data/_stats.json")

  const now = new Date()

  const data = JSON.stringify(
    {
      date: {
        iso: now.toISOString(),
        epoch: now.getTime()
      }
    },
    null,
    2
  )

  fs.writeFileSync(
    statsPath,
    data,
    "utf-8"
  )
  console.log("reload stats saved")
}