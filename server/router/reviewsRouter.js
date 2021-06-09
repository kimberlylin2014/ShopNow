const express = require('express');

const router = express.Router();
const reviewsController = require('../controllers/reviewsController.js');

// Route sent from  Client: /api/reviews?product_id=14931&count=10&sort='helpful'
router.get('/', reviewsController.getAllReviews);

// Route sent from  Client: /api/reviews/product_id
router.get('/meta/:product_id', reviewsController.getReviewMetaData);

// Route sent from  Client: /api/reviews/:product_id
router.post('/', reviewsController.postReview);

//Route sent from Client: /api/123/helpful
router.put('/:review_id/helpful', reviewsController.updateReviewHelpful);

module.exports = router;
