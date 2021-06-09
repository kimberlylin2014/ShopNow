const axios = require('axios');
const { API_URL, authorizationHeader } = require('./index.js');

const getAllReviews = (req, res) => {
  const id = req.query.product_id;
  const { count } = req.query;
  const { sort } = req.query;
  axios.get(`${API_URL}/reviews?product_id=${id}&count=${count}&sort=${sort}`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch(() => {
      res.status(400).send('Can not get all reviews.');
    });
};

const getReviewMetaData = (req, res) => {
  const id = req.params.product_id;
  axios.get(`${API_URL}/reviews/meta?product_id=${id}`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch(() => {
      res.status(400).send('Can not get meta data for review.');
    });
};

const postReview = (req, res) => {
  const {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = req.body;

  let post = {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  };

  axios.post(`${API_URL}/reviews`, post, authorizationHeader)
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch(() => {
      res.status(400).send('Can not post new review.');
    });
};

const updateReviewHelpful = (req, res) => {
  const id = req.params.review_id;
  axios.put(`${API_URL}/reviews/${id}/helpful`, null, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch(() => {
      res.status(400).send('Can not update review.');
    });
};

module.exports = {
  getAllReviews,
  getReviewMetaData,
  postReview,
  updateReviewHelpful,
};
