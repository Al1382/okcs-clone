const express = require('express');
const mongoose = require('mongoose');
const app = express()

const PORT = 3000;
const mongoConnectionString = "mongodb://localhost:27017/OKCS"

const productRouter = require('./router/product.router')
const discountCodeRouter = require('./router/discount-code.router')

app.use(express.json());
app.use('/api/products', productRouter)
app.use('/api/discounts', discountCodeRouter)

mongoose
  .connect(mongoConnectionString)
  .then(async () => {
    console.log('DB connected successfully !!');
    // Start the server
    app.listen(PORT, () => {
      console.log('Backend server is running on HTTP');
    });
  })
  .catch((err) => {
    // catch the err if there is one
    console.log(err);
  });