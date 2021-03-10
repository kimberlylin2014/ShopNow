import React from 'react';
import axios from 'axios';
import Overview from './components/overview/Overview.jsx';
import RelatedItemsAndComparison from './components/related/RelatedItemsAndComparison.jsx';
import Reviews from './components/reviews/RatingsAndReviews.jsx';
import Header from './components/header/Header.jsx';
import styles from './appStyle.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 14038,
      styleID: 70565,
      averageRating: 3.5,
      itemCount: 0,
    };
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.changeStyleId = this.changeStyleId.bind(this);
    this.changeAverageRating = this.changeAverageRating.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  componentDidMount() {
    this.getItemInCart();
    // figure out how to get product id from url
    const queryString = window.location.search;
    console.log(window.location);
    // console.log(queryString);
  }

  changeAverageRating(averageRating) {
    this.setState({ averageRating });
  }

  changeCurrentProduct(productID) {
    this.setState({ productID });
  }

  changeStyleId(styleID) {
    this.setState({ styleID });
  }

  getItemInCart() {
    axios.get('api/cart').then((data) => {
      let totalItem = 0;
      for (const keys in data.data) {
        totalItem += Number(data.data[keys].count);
      }
      this.setState({
        itemCount: totalItem,
      });
    });
  }

  onAddToCart(skuId) {
    axios.post('/api/cart', {
      sku_id: skuId,
    }).then(() => {
      this.getItemInCart();
    }).catch((e) => console.log('Error', e));
  }

  render() {
    const { productID, styleID, averageRating, itemCount } = this.state;
    return (
      <div className={styles.app}>
        <Header itemCount={itemCount} />
        <Overview
          changeStyleId={this.changeStyleId}
          productID={productID}
          onAddToCart={this.onAddToCart}
        />
        <div className={styles.section}>
          <RelatedItemsAndComparison
            productID={productID}
            styleID={styleID}
            changeCurrentProduct={this.changeCurrentProduct}
          />
        </div>
        <Reviews
          productID={productID}
          changeAverageRating={this.changeAverageRating}
        />
      </div>

    );
  }
}

export default App;
