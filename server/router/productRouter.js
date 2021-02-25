var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController.js');

// api/products
router.get('/', productController.getAllProducts);

module.exports = router;
