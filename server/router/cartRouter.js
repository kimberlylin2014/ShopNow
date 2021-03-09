var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController.js');

// base endpoint: 'api/cart'

router.get('/', cartController.getCart);

router.post('/', cartController.addToCart);

module.exports = router;
