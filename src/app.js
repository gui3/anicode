const express = require("express")
const path = require("path")
const eta = require("eta")

const loadConfig = require("./lib/loadConfig.js")
const loadData = require("./lib/loadData.js")

const config = loadConfig()
const app = express()

app.engine("eta", eta.renderFile)
app.set("view engine", "eta")
app.set("views", path.join(__dirname, "./views"))

app.use(express.static(path.join(__dirname, '../public')))

// app.use(favicon(path.join(
//   __dirname, 'public', 'favicon.ico'
// )))

app.get("/", function (req, res) {
  res.render("index", {})
})

app.get("/reload", function (req, res) {
  const data = loadData(config)
    .then(reloaded => {
      if (reloaded) {
        console.log("fresh data ready!")
      }
    })
    .catch(err => console.error(err))
  res.redirect("/")
})

app.get("/dev/error", function (req, res) {
  const err = new Error("test error")
  err.code = 500
  throw err
})

app.use(function (req, res, next) { // 404 page not found
  res.status(404)
  res.render("error404", {
    path: req.path
  })
})

app.use(function (err, req, res, next) {
  console.log(err.code)
  console.log(err.message)
  console.log(err.stack)

  res.status(err.code || 500)
  res.render("error500", {
    error: err
  })
})

const port = config.PORT
app.listen(port, function () {
  console.log("server listenning on port " + port)
})