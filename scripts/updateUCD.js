const getLoadStats = require("./loadData/getLoadStats.js")
const fetchTxt = require("./loadData/fetchTxt.js")
const saveData = require("./loadData/saveData.js")
const saveLoadStats = require("./loadData/saveLoadStats.js")
const parseUcd = require("./loadData/parseUcd.js")

const config  = require("./CONFIG.js")

console.log("--- reloading unicode data")

const stats = getLoadStats()
console.log(
  "last fetch : " + stats.iso,
  "from source : " + stats.source
)

fetchTxt(config.ucdSource)
.then(ucdRaw => {
  console.log("ucd data recieved")
  saveData(ucdRaw, "ucd.txt")
  console.log("data saved to /src/data/ucd.txt - build and deploy to update")
  saveLoadStats({
    source: config.ucdSource
  })
  
  const ucdObj = parseUcd(ucdRaw)
  const ucdJson = JSON.stringify(ucdObj) //, null, 1)
  saveData(ucdJson, "ucd.json")
  console.log("data saved to /public/data/ucd.json")
})
.catch(err => {
  console.error(err)
})