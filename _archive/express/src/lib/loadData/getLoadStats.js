const fs = require("fs")
const path = require("path")

module.exports = function getLoadStats () {
  const statsPath = path.join(__dirname, "../../../public/data/_stats.json")

  if (fs.existsSync(statsPath)) {
    const statsRaw = fs.readFileSync(
      statsPath,
      "utf-8"
    )
    const stats = JSON.parse(statsRaw)
    stats.exists = true
  
    return stats
  }
  else {
    return {
      exists: false
    }
  }
}