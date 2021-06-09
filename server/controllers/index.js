const { API_KEY } = require('../../config.js');
const { API_URL } = require('../../config.js');

const authorizationHeader = {
  headers: { Authorization: `${API_KEY}` },
};

module.exports = {
  API_KEY,
  API_URL,
  authorizationHeader,
};
