const KEY = require('./index.js').KEY;
const axios = require('axios');

//getAllReviews
// product_id=id&count=countNum&sort=sortType
const getAllReviews = (req, res) => {
  var id = req.query.product_id;
  var count = req.query.count;
  var sort= req.query.sort;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=${id}&count=${count}&sort=${sort}`,
  {headers: { 'Authorization' : `${KEY}` }})
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.status(400).send('can not get all reviews')
      console.log('ERR', err);
    })
};

// getReviewMetaData
const getReviewMetaData = (req, res) => {
  // var id = req.query.product_id;
  var id = req.params.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`,
  {headers: { 'Authorization' : `${KEY}` }})
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.status(400).send('can not get all reviews')
    })
};

// //postReview
const postReview = (req, res) => {
  // var {product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
  // console.log(product_id);
  // console.log(rating);
  // console.log(summary);
  // console.log(body);
  // console.log(recommend);
  // console.log(name);
  // console.log(email);
  // console.log(photos);
  // console.log(characteristics);

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
    headers:  { 'Authorization' : `${KEY}` }})
      .then((resp) => {
        res.status(200).send('Review posted');
      }).catch((err) => {
        console.log('ERR', err);
      })
};

// //updateReviewHelpful
const updateReviewHelpful = (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${req.params.review_id}/helpful`, null, {
    headers: {'Authorization' : `${KEY}`}
  })
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.status(400).send('can not update')
    })
};


module.exports = {
  getAllReviews,
  getReviewMetaData,
  postReview,
  updateReviewHelpful
};