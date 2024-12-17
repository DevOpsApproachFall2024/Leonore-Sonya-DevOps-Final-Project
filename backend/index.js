const express = require('express')
const app = express()

// anything we do that is math related will be here. 
// we can make it respond with a link so that everything else isn't soley on the front end, this can be discussed. 

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)