import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/Overview.jsx';
import Related from './components/related/Related.jsx';
import Reviews from './components/reviews/RatingsAndReviews.jsx';
import Header from './components/Header/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 14931,
      styleID: 76286,
      averageRating: 3.5
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

  changeStyleId(styleID) {
    this.setState({ styleID });
  }

  render() {
    const { productID, styleID } = this.state;
    return (
      <div>
        <Header />
        <Overview changeStyleId={this.changeStyleId} productID={productID} />
        <Related
          productID={productID}
          styleID={styleID}
          changeCurrentProduct={this.changeCurrentProduct}
        />
        <Reviews id="Reviews" />
      </div>

    );
  }
}

export default App;