const express = require('express')
const app = express()

// anything we do that is math related will be here. 
// we can make it respond with a link so that everything else isn't soley on the front end, this can be discussed. 

app.get('/', function (req, res) {
  res.send('Hello World')
})

//factotial calculator route
app.get('/factorial/:num', function(req, res) {
  let {num} = req.params;

  //parse the number to an integer
  num = parseInt(num);

  //validate input
  if (isNaN(num) || num < 0) {
      return res.status(400).send('Please enter a positive number');
  }

  //calculate factorial series
  const factorial = (n) => {
    if (n === 0  || n === 1 ) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
  }

  //return factorial series
  const result = factorial(num);
  res.json({factorial: result});
})

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
