const express = require("express")
const fs = require(fs)
const app = express()
const port = 80

app.get("/",function(req,res) {
  console.log(req)
  res.send(200)
  var Sreq = JSON.stringify(req)
  fs.writeFile("req.json", Sreq, 'utf8')
})

app.listen(port)
