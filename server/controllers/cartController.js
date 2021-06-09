const axios = require('axios');
const { API_URL, authorizationHeader } = require('./index.js');

const getCart = (req, res) => {
  axios.get(`${API_URL}/cart`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    }).catch((err) => {
      res.status(400).send(err);
    });
};

const addToCart = (req, res) => {
  const { sku_id } = req.body;
  axios.post(`${API_URL}/cart`, { sku_id }, authorizationHeader)
    .then(() => {
      res.send('Item added');
    }).catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  getCart,
  addToCart,
};
