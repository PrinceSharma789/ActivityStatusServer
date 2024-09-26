const express = require('express');
const activities = require('./data');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a route for activities (as an example API)
app.get('/activities', (req, res) => {
  const { status } = req.query || {};
  console.log("🚀 ~ app.get ~ status:", status)
  res.json(activities.filter(item => item.status == status));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
