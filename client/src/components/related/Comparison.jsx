import React from 'react';

class Comparison extends React.Component {
  constructor() {
    super();
  }

  /*
  loadFeatures(product) {
    let features = [];
    axios.get(`/api/products/${product.id}`)
    .then((resp) => {
      console.log('resp: ', resp);
      features = resp.data.features;
    })
    .catch((err) => console.log(err));
    return Object.assign(product, features);
  }
  */

  closeModal() {
    // calls toggleModal in relatedItems to turn off modal
  }

  render() {
    return <div>Modal!</div>;
  }
}

export default Comparison;