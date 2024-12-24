const express = require('express');
const app = express();

// Local cache for storing calculated factorials
const factorialCache = {};

// Factorial calculator route
app.get('/factorial/:num', function (req, res) {
  let { num } = req.params;

  // Parse the number to an integer
  num = parseInt(num);

  // Validate input
  if (isNaN(num) || num < 0) {
    return res.status(400).send('Please enter a positive number');
  }

  // Function to calculate factorial with caching
  const factorial = (n) => {
    // Check if result is in the cache
    if (factorialCache[n] !== undefined) {
      return factorialCache[n];
    }

    // Base case
    if (n === 0 || n === 1) {
      factorialCache[n] = 1;
      return 1;
    }

    // Calculate factorial and store in cache
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    factorialCache[n] = result; // Cache the result
    return result;
  };

  // Return factorial series
  const result = factorial(num);
  res.json({ factorial: result });
});

// Start Server
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
