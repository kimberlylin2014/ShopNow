import React from 'react';
import Overview from './components/overview/Overview.jsx';
import RelatedItemsAndComparison from './components/related/RelatedItemsAndComparison.jsx';
import Reviews from './components/reviews/RatingsAndReviews.jsx';
import Header from './components/Header/Header.jsx';
import styles from './appStyle.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 14450,
      styleID: 73180,
      averageRating: 3.5
    };
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.changeStyleId = this.changeStyleId.bind(this);
  }

  componentDidMount() {
    // figure out how to get product id from url
    const queryString = window.location.search;
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

  render() {
    const { productID, styleID } = this.state;
    return (
      <div className={styles.app}>
        <Header />
        <Overview changeStyleId={this.changeStyleId} productID={productID} />
        <div className={styles.section}>
          <RelatedItemsAndComparison
            productID={productID}
            styleID={styleID}
            changeCurrentProduct={this.changeCurrentProduct}
          />
        </div>
        <Reviews />
      </div>

    );
  }
}

export default App;
