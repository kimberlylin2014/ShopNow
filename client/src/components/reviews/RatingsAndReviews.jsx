/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';
import { getTotalReviews, getNumOfRecommendation, determineNumReviewsToLoad, calculateAverageRating } from './utils/rating.js';
// 14040 (little reviwes)
// 14937
//  14807 (NO REVIEWS)

// const productID = '14937';
const productID = '14807';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      metaReview: null,
      sortBy: 'relevance',
      productInfo: null,
      totalReviews: 0,
      numOfRecommendation: null,
      reviewCount: 0,
      displayMoreReviewsButton: false,
      averageRating: 0,
      filterTracker: [],
    };
    this.addReview = this.addReview.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.updateHelpfulByReviewID = this.updateHelpfulByReviewID.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.resetModuleState = this.resetModuleState.bind(this);
    this.filterReviewsByRating = this.filterReviewsByRating.bind(this);
  }

  componentDidMount() {
    this.getMetaReview();
    this.getProductInfo();
  }

  componentDidUpdate(prevProps) {
    const { productID } = this.props;
    if (prevProps.productID !== productID) {
      this.resetModuleState(() => {
        this.setState({
          reviews: [],
          metaReview: null,
          sortBy: 'relevance',
          productInfo: null,
          totalReviews: 0,
          numOfRecommendation: null,
          reviewCount: 0,
          displayMoreReviewsButton: false,
          averageRating: 0,
        }, () => {
          this.getProductInfo();
          this.getMetaReview();
        });
      });
    }
  }

  getProductInfo() {
    const { productID } = this.props;
    axios.get(`/api/products/${productID}`)
      .then((resp) => {
        this.setState({
          productInfo: {...resp.data}
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMetaReview() {
    const { productID } = this.props;
    const { reviewCount } = this.state;
    axios.get(`/api/reviews/meta/${productID}`)
      .then((resp) => {
        const { data: { recommended } } = resp;
        const totalReviews = getTotalReviews(recommended.false, recommended.true);
        const numOfRecommendation = getNumOfRecommendation(recommended.false, recommended.true);
        const numOfReviewsToLoad = determineNumReviewsToLoad(totalReviews, reviewCount);
        const averageRating = calculateAverageRating(resp.data.ratings);
        if (numOfReviewsToLoad) {
          this.setState({
            metaReview: { ...resp.data },
            reviewCount: numOfReviewsToLoad.reviewCount,
            displayMoreReviewsButton: numOfReviewsToLoad.displayButton,
            numOfRecommendation,
            totalReviews,
            averageRating,
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

  getAllReviews(reviewCount = this.state.reviewCount ) {
    const { sortBy } = this.state;
    const { productID } = this.props;
    axios.get(`/api/reviews?product_id=${productID}&count=${reviewCount}&sort=${sortBy}`)
      .then((resp) => {
        const reviews = resp.data.results.map((review) => ({...review, display: true }));
        this.setState({
          reviews: reviews,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  resetModuleState(callback) {
    callback();
  }

  toggleSortBy(sortBy) {
    this.setState({
      sortBy: sortBy
    }, () => {
      this.getAllReviews(this.state.reviewCount);
    });
  }

  addReview(review) {
    const { productID, changeAverageRating } = this.props;
    axios.post('/api/reviews', review)
      .then((resp) => {
        return axios.get(`/api/reviews/meta/${productID}`)
      })
      .then((metaData) => {
        const { data: { recommended, ratings } } = metaData;
        const averageRating = calculateAverageRating(ratings);
        const numOfRecommendation = getNumOfRecommendation(recommended.false, recommended.true);
        const totalReviews = getTotalReviews(recommended.false, recommended.true);
        changeAverageRating(parseFloat(averageRating));
        this.setState({
          metaReview: { ...metaData.data },
          numOfRecommendation,
          totalReviews,
          averageRating,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateHelpfulByReviewID(reviewID) {
    axios.put(`/api/reviews/${reviewID}/helpful`)
      .then((resp) => {
        // this.getMetaReview();
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMoreReviews(e) {
    this.getMetaReview();
  }

  filterReviewsByRating(rating, displayStatus) {
    const { reviews } = this.state;
    const filteredReviews = reviews.map((review) => {
      if (review.rating !== rating) {
        review.display = !displayStatus;
      }
      return review;
    });
    this.setState({
      reviews: filteredReviews,
    });
  }

  render() {
    const {
      reviews,
      metaReview,
      productInfo,
      totalReviews,
      numOfRecommendation,
      displayMoreReviewsButton,
      averageRating,
    } = this.state;
    return (
      <section className={styles.ratingsAndReviews}>
        <h2>Ratings & Reviews</h2>
        <div className={styles.moduleColumns}>
          <div className={styles.containerBreakdown}>
            <ContainerBreakdown
              metaReview={metaReview}
              numOfRecommendation={numOfRecommendation}
              totalReviews={totalReviews}
              averageRating={averageRating}
              filterReviewsByRating={this.filterReviewsByRating}
            />
          </div>
          <div className={styles.containerList} id="reviews">
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
