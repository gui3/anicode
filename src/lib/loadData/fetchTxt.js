const fetch = require("node-fetch")

module.exports = async function fetchTxt (url) {
  const raw = await fetch(
    url,
    {
      //mode: "no-cors",
      headers : { 
        "Content-Type": "application/txt",
        "Accept": "application/txt"
      }
    }
  )
  const data = raw.text()

  return data
}