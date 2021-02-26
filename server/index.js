const express = require('express');
const path = require('path');
const productRouter = require('./router/productRouter.js');
const reviewRouter = require('./router/reviewsRouter.js');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/products', productRouter);

app.use('/api/reviews', reviewRouter)

app.listen(3000, function() {
  console.log('listening on port 3000!');
});