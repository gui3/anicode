const getLoadStats = require("./loadData/getLoadStats.js")
const fetchTxt = require("./loadData/fetchTxt.js")
const saveData = require("./loadData/saveData.js")
const saveLoadStats = require("./loadData/saveLoadStats.js")
const parseUcd = require("./loadData/parseUcd.js")

module.exports = async function loadData (config) {
  console.log("--- reloading data")

  const stats = getLoadStats()
  console.log(stats)

  if (
    stats.exists 
    && (Date.now() - stats.date.epoch) < config.DATA.load.delay) {
      console.log("too soon to reload")

      return false
  } else {
    const ucdRaw = await fetchTxt(config.DATA.ucd.url)
    console.log("ucd data recieved")
    saveData(ucdRaw, "ucd.txt")
    console.log("data saved to /public/data/ucd.txt")
    saveLoadStats()

    const ucdObj = parseUcd(ucdRaw)
    const ucdJson = JSON.stringify(ucdObj) //, null, 1)
    saveData(ucdJson, "ucd.json")
    console.log("data saved to /public/data/ucd.json")

    return true
  }
}