const express = require('express');
const app = express();
const port = 5000;

// Sample products array
const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
];

// Root route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Shopping API. Use /api/products to see the product list.');
});

// Route to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
