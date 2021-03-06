/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';

// 14040
// 14937

const productID = '14937';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: productID,
      reviews: [],
      metaReview: null,
      sortBy: 'newest',
      productInfo: null,
      totalReviews: null,
      numOfRecommendation: null,
      reviewCount: 0,
      displayMoreReviewsButton: false,
    };
    this.addReview = this.addReview.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.updateHelpfulByReviewID = this.updateHelpfulByReviewID.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
  }

  componentDidMount() {
    // this.getAllReviews();
    this.getMetaReview();
    this.getProductInfo();
  }

  getProductInfo() {
    const { product_id } = this.state;
    axios.get(`/api/products/${product_id}`)
      .then((resp) => {
        this.setState({
          productInfo: {...resp.data}
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getMetaReview() {
    const { product_id } = this.state;
    axios.get(`/api/reviews/meta/${product_id}`)
      .then((resp) => {
        const { data: { recommended } } = resp;
        const totalReviews = this.getTotalReviews(recommended.false, recommended.true);
        const numOfRecommendation = this.getNumOfRecommendation(recommended.false, recommended.true);
        this.setState({
          metaReview: { ...resp.data },
          totalReviews,
          numOfRecommendation,
        }, () => {
          const { reviewCount } = this.state;
          if (totalReviews > reviewCount && totalReviews >= 2) {
            this.setState((currState) => (
              {
                reviewCount: currState.reviewCount + 2,
                displayMoreReviewsButton: true,
              }
            ), () => {
              this.getAllReviews();
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getTotalReviews(numOfFalse, numOfTrue) {
    return parseInt(numOfFalse) + parseInt(numOfTrue);
  }

  getNumOfRecommendation(numOfFalse, numOfTrue) {
    const total = parseInt(numOfFalse) + parseInt(numOfTrue);
    const precentageOfRec = (parseInt(numOfTrue) / total) * 100;
    return precentageOfRec.toFixed(0);
  }

  getAllReviews() {
    const { product_id, sortBy, reviewCount } = this.state;
    axios.get(`/api/reviews?product_id=${product_id}&count=${reviewCount}&sort=${sortBy}`)
      .then((resp) => {
        this.setState({
          reviews: [...resp.data.results],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleSortBy(sortBy) {
    this.setState({
      sortBy: sortBy
    }, () => {
      this.getAllReviews();
    });
  }

  addReview(review) {
    axios.post('/api/reviews', review)
      .then((resp) => {
        this.getMetaReview();
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  updateHelpfulByReviewID(reviewID) {
    axios.put(`api/reviews/${reviewID}/helpful`)
      .then((resp) => {
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { reviews, metaReview, productInfo, totalReviews, numOfRecommendation, displayMoreReviewsButton } = this.state;
    return (
      <section className={styles.ratingsAndReviews}>
        <h2>Ratings & Reviews</h2>
        <div className={styles.moduleColumns}>
          <ContainerBreakdown metaReview={metaReview} numOfRecommendation={numOfRecommendation} totalReviews={totalReviews}/>
          <ContainerList
            reviews={reviews}
            metaReview={metaReview}
            productInfo={productInfo}
            addReview={this.addReview}
            updateHelpfulByReviewID={this.updateHelpfulByReviewID}
            totalReviews={totalReviews}
            toggleSortBy={this.toggleSortBy}
            displayMoreReviewsButton={displayMoreReviewsButton}
          />
        </div>
      </section>
    );
  }
}

export default RatingsAndReviews;
