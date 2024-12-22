const express = require('express')
const app = express()

// anything we do that is math related will be here. 
// we can make it respond with a link so that everything else isn't soley on the front end, this can be discussed. 

app.get('/', function (req, res) {
  res.send('Hello World')
})

//fibonacci calculator route
app.get('/fibonacci/:num', function(req, res) {
  let {num} = req.params;

  //parse the number to an integer
  num = parseInt(num);

  //validate input
  if (isNaN(num) || num < 0) {
      return res.status(400).send('Please enter a positive number');
  }

  //calculate fibonacci series
  const fibonacci = (n) => {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    let series = [0, 1];
    for (let i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }

  //return fibonacci series
  const result = fibonacci(num);
  res.json({fibonacci: result});
})

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
