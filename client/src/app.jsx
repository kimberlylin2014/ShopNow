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
      product_id: 14931,
      averageRating: 0
    };
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
  }

  componentDidMount() {
    // figure out how to get product id from url
    const queryString = window.location.search;
    // console.log(queryString);
    this.loadProduct(this.state.product_id);
    console.log(queryString);
    //this.loadProduct(this.state.product_id);
  }

  loadProduct(product_id) {
    axios.get(`/api/products/${product_id}`)
      .then(resp => this.setState({ product_id }))
      .catch(err => console.log('ERR', err));
  }

  // loadAverageRating

  changeCurrentProduct(product_id) {
    this.setState({ product_id });
  }

  render() {
    const { product_id } = this.state;
    console.log('current product in App:', product_id);
    return (
      <div>
        <Overview />
        <Related productID={product_id} changeCurrentProduct={this.changeCurrentProduct} />
        <Reviews />
      </div>

    );
  }
}

export default App;