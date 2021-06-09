const axios = require('axios');
const { API_URL, authorizationHeader } = require('./index.js');

const getAllProducts = (req, res) => {
  axios.get(`${API_URL}/products`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    }).catch(() => {
      res.status(400).send('Can not get all products.');
    });
};

const getOneProduct = (req, res) => {
  const id = req.params.product_id;
  axios.get(`${API_URL}/products/${id}`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    }).catch(() => {
      res.status(400).send('Can not get product.');
    });
};

const getProductStyles = (req, res) => {
  const id = req.params.product_id;
  axios.get(`${API_URL}/products/${id}/styles`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    }).catch(() => {
      res.status(400).send('Can not get product styles.');
    });
};

const getRelatedProducts = (req, res) => {
  const id = req.params.product_id;
  axios.get(`${API_URL}/products/${id}/related`, authorizationHeader)
    .then((resp) => {
      res.send(resp.data);
    }).catch(() => {
      res.status(400).send('Can not get related products.');
    });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getRelatedProducts,
};
