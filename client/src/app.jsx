import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/Overview.jsx';
import Related from './components/related/Related.jsx';
import Reviews from './components/reviews/RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 14807,
      averageRating: 0
    };
  }

  componentDidMount() {
    // figure out how to get product id from url
    const queryString = window.location.search;
    console.log(queryString);
    this.loadProduct(this.state.product_id);
  }

  loadProduct(product_id) {
    axios.get(`/api/products/${product_id}`)
      .then(resp => this.setState({ product_id }))
      .catch(err => console.log('ERR', err));
  }

  // loadAverageRating

  render() {
    const { product_id } = this.state;
    return (
      <div>
        <Overview />
        <Related productID={product_id} />
        <Reviews />
      </div>

    );
  }
};

export default App;