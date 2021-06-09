const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.getAllProducts);

router.get('/:product_id', productController.getOneProduct);

router.get('/:product_id/styles', productController.getProductStyles);

router.get('/:product_id/related', productController.getRelatedProducts);

module.exports = router;
