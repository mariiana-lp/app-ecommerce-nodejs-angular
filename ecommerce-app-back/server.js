
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let products = [
  { id: 1, name: 'Product 1', price: 20.99 },
  { id: 2, name: 'Product 2', price: 30.49 },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(product);
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  products = products.map(product =>
    product.id === productId ? { ...product, ...updatedProduct } : product
  );

  res.json(updatedProduct);
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter(product => product.id !== productId);
  res.json({ message: 'Product deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
