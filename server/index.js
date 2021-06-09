const express = require('express');

const app = express();
const path = require('path');
const compression = require('compression');

app.use(compression());
app.use(express.json());

const productRouter = require('./router/productRouter.js');
const reviewRouter = require('./router/reviewsRouter.js');
const cartRouter = require('./router/cartRouter.js');

// app.use('/:productId', express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.use('/api/products/', productRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/cart', cartRouter);

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});
