const KEY = require('./index.js').KEY;
const axios = require('axios');

//getAllReviews
// product_id=id&count=countNum&sort=sortType
const getAllReviews = (req, res) => {
  var id = req.query.product;
  var count = req.query.count;
  var sort= req.query.sort;
  console.log(id + count + sort);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14931&count=${count}&sort=${sort}`, {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(id + count + sort);
  }).catch((err) => {
    res.status(400).send('can not get all reviews')
    console.log('ERR', err);
  })
};

//getReviewMetaData
const getReviewMetaData = (req, res) => {
  res.end();
};

//postReview
const postReview = (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
    product_id: req.params.product_id,
    rating: req.params.rating,
    summary:req.params.summary,
    body:req.params.body,
    recommend: req.params.recommend,
    name: req.params.name,
    email: req.params.email,
    photos: req.params.photos,
    characteristics: req.params.characteristics,
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.status(200).send('Review posted');
  }).catch((err) => {
    console.log('ERR', err);
  })
  res.end();
};

//updateReviewHelpful
const updateReviewHelpful = (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.params.review_id}/report`, {
    headers:
      { 'Authorization' : `${KEY}` },
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    console.log('ERR', err);
  })
};

module.exports = {
  getAllReviews,
  getReviewMetaData,
  postReview,
  updateReviewHelpful
};