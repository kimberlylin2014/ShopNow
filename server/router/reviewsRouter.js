var express = require('express');
var router = express.Router();
const reviewsController = require('../controllers/reviewsController.js');

// base endpoint: '/api/reviews'
// /reviews?product_id=14931&count=10&sort='helpful'
// router.get('?product_id=id&count=countNum&sort=sortType', reviewsController.getAllReviews);


router.get('/meta', reviewsController.getReviewMetaData);

router.post('/' , reviewsController.postReview);

// not working
router.put('/:review_id/report', reviewsController.updateReviewHelpful);

module.exports = router;
