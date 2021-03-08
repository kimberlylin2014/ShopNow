/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';
import { getTotalReviews, getNumOfRecommendation, determineNumReviewsToLoad } from './utils/rating.js';
// 14040 (little reviwes)
// 14937
//  14807 (NO REVIEWS)

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
      totalReviews: 0,
      numOfRecommendation: null,
      reviewCount: 0,
      displayMoreReviewsButton: false,
    };
    this.addReview = this.addReview.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.updateHelpfulByReviewID = this.updateHelpfulByReviewID.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getMetaReview();
    this.getProductInfo();
  }

  getProductInfo() {
    const { product_id } = this.state;
    axios.get(`/api/products/${product_id}`)
      .then((resp) => {
        this.setState({
          productInfo: {...resp.data}
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // getMetaReview() {
  //   const { product_id } = this.state;
  //   axios.get(`/api/reviews/meta/${product_id}`)
  //     .then((resp) => {
  //       const { data: { recommended } } = resp;
  //       const totalReviews = getTotalReviews(recommended.false, recommended.true);
  //       const numOfRecommendation = getNumOfRecommendation(recommended.false, recommended.true);
  //       this.setState({
  //         metaReview: { ...resp.data },
  //         totalReviews,
  //         numOfRecommendation,
  //       }, () => {
  //         const { reviewCount } = this.state;
  //         if (totalReviews > reviewCount && totalReviews >= 2) {
  //           this.setState((currState) => (
  //             {
  //               reviewCount: currState.reviewCount + 2,
  //               displayMoreReviewsButton: true,
  //             }
  //           ), () => {
  //             this.getAllReviews();
  //           });
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  getMetaReview() {
    const { product_id } = this.state;
    axios.get(`/api/reviews/meta/${product_id}`)
      .then((resp) => {
        const { data: { recommended } } = resp;
        const totalReviews = getTotalReviews(recommended.false, recommended.true);
        const numOfRecommendation = getNumOfRecommendation(recommended.false, recommended.true);
        const numOfReviewsToLoad = determineNumReviewsToLoad(totalReviews, this.state.reviewCount);
        if (numOfReviewsToLoad) {
          this.setState({
            metaReview: { ...resp.data },
            reviewCount: numOfReviewsToLoad.reviewCount,
            displayMoreReviewsButton: numOfReviewsToLoad.displayButton,
            totalReviews,
            numOfRecommendation,
          }, () => {
            this.getAllReviews(numOfReviewsToLoad.reviewCount);
          });
        } else {
          // If No Reviews
          this.setState({
            metaReview: { ...resp.data },
          });
        }
      })
      .catch((err) => console.log(err));
  }

  getAllReviews(reviewCount) {
    const { product_id, sortBy } = this.state;
    axios.get(`/api/reviews?product_id=${product_id}&count=${reviewCount}&sort=${sortBy}`)
      .then((resp) => {
        console.log(resp.data.result)
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
      this.getAllReviews(this.state.reviewCount);
    });
  }

  addReview(review) {
    axios.post('/api/reviews', review)
      .then((resp) => {
        this.getMetaReview();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateHelpfulByReviewID(reviewID) {
    axios.put(`api/reviews/${reviewID}/helpful`)
      .then((resp) => {
        this.getMetaReview();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMoreReviews(e) {
    console.log('handling load more reviews');
    this.getMetaReview();
  }

  render() {
    const {
      reviews,
      metaReview,
      productInfo,
      totalReviews,
      numOfRecommendation,
      displayMoreReviewsButton,
    } = this.state;
    console.log(displayMoreReviewsButton)
    return (
      <section className={styles.ratingsAndReviews}>
        <h2>Ratings & Reviews</h2>
        <div className={styles.moduleColumns}>
          <div className={styles.containerBreakdown}>
            <ContainerBreakdown
              metaReview={metaReview}
              numOfRecommendation={numOfRecommendation}
              totalReviews={totalReviews}
            />
          </div>
          <div className={styles.containerList}>
            <ContainerList
              reviews={reviews}
              metaReview={metaReview}
              productInfo={productInfo}
              addReview={this.addReview}
              updateHelpfulByReviewID={this.updateHelpfulByReviewID}
              totalReviews={totalReviews}
              toggleSortBy={this.toggleSortBy}
              displayMoreReviewsButton={displayMoreReviewsButton}
              loadMoreReviews={this.loadMoreReviews}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default RatingsAndReviews;
