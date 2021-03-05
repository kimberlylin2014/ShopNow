const KEY = require('./index.js').KEY;
const axios = require('axios');

const getCart = (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((resp) => {
    res.send(resp.data);
  }).catch((err) => {
    console.log('ERR', err);
  })
};

const addToCart = (req, res) => {
  const { sku_id, count } = req.body;

  axios.postReview('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', {
    sku_id,
    count
  },{
    headers:
      { 'Authorization' : `${KEY}` };
  }).then((resp) => {
    res.send('Item added');
  }).catch((err) => {
    console.log('ERR', err);
  })
};

module.exports = {
  getCart
};