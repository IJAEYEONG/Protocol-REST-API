const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')// dirname 으로 index.html을 불르는 부분
})
app.get('/style.css', function(req, res) {// dirname 으로 style.css을 불르는 부분
  res.sendFile(__dirname + '/style.css')
})
app.get('/app.js', function(req, res) {// dirname 으로 app.js을 불르는 부분
  res.sendFile(__dirname + '/app.js')
})
app.listen(3000, function() {
  console.log("start! express server on port http://localhost:3000/")
})
