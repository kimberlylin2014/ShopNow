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
      averageRating: 0,
      style_id: 76285,
    };
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.changeStyleId = this.changeStyleId.bind(this);
  }

  componentDidMount() {
    // figure out how to get product id from url
    const queryString = window.location.search;
    // console.log(queryString);
    //this.loadProduct(this.state.productID);
    console.log(queryString);
    //this.loadProduct(this.state.productID);
  }

  loadProduct(productID) {
    axios.get(`/api/products/${productID}`)
      .then((resp) => this.setState({ productID }))
      .catch((err) => console.log('ERR', err));
  }

  // loadAverageRating

  changeCurrentProduct(productID) {
    this.setState({ productID });
  }

  changeStyleId(style_id) {
    this.setState({ style_id });
  }

  render() {
    const { productID, styleID } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <Overview />
        <Related
          productID={productID}
          styleID={styleID}
          changeCurrentProduct={this.changeCurrentProduct}
        />
=======
        <Overview changeStyleId={this.changeStyleId} productID={product_id} />
        <Related productID={product_id} changeCurrentProduct={this.changeCurrentProduct} />
>>>>>>> Pass style_id back to App
        <Reviews />
      </div>

    );
  }
}

export default App;