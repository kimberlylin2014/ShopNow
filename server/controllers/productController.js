const KEY = require('./index.js').KEY;
const axios = require('axios');

const getAllProducts = (req, res) => {
  // let options = {
  //   method: 'get',
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
  //   headers: {
  //     'Authorization':`${KEY}`
  //   }
  // };

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
    headers:
      { 'Authorization' : `${KEY}` }
  }).then((data) => {
    console.log(data.data);
    res.send('Hi');
  }).catch((err) => {
    console.log('ERR', err);
  })
};



module.exports = {
  getAllProducts
};