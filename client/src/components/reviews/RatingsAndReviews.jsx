/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';
import { getTotalReviews, getNumOfRecommendation, determineNumReviewsToLoad, calculateAverageRating } from './utils/rating.js';

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
      filterTracker: {
        5: true,
        4: true,
        3: true,
        2: true,
        1: true,
      },
    };
    this.addReview = this.addReview.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.updateHelpfulByReviewID = this.updateHelpfulByReviewID.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.filterReviewsByRating = this.filterReviewsByRating.bind(this);
  }

  componentDidMount() {
    const { productID } = this.props;
    this.getMetaReview(productID);
    this.getProductInfo(productID);
  }

  componentDidUpdate(prevProps) {
    const { productID } = this.props;
    if (prevProps.productID !== productID) {
      this.getMetaReview(productID);
      this.getProductInfo(productID);
    }
  }

  getProductInfo(productID) {
    axios.get(`/api/products/${productID}`)
      .then((resp) => {
        this.setState({
          productInfo: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMetaReview(productID) {

    axios.get(`/api/reviews/meta/${productID}`)
      .then((resp) => {
        let { reviewCount } = this.state;
        const { data: { recommended } } = resp;
        let displayButton = true;
        const totalReviews = getTotalReviews(recommended.false, recommended.true);
        const numOfRecommendation = getNumOfRecommendation(recommended.false, recommended.true);
        const averageRating = calculateAverageRating(resp.data.ratings);
        const numOfReviewsToLoad = determineNumReviewsToLoad(totalReviews, reviewCount);
        reviewCount += numOfReviewsToLoad;
        if ((totalReviews - reviewCount) === 0) {
          displayButton = false;
        }

        this.setState({
          metaReview: { ...resp.data },
          reviewCount,
          displayMoreReviewsButton: displayButton,
          numOfRecommendation,
          totalReviews,
          averageRating,
        }, () => {
          const { reviewCount } = this.state;
          this.getAllReviews(reviewCount);
        });
      })
      .catch((err) => console.log(err));
  }

  getAllReviews(reviewCount = this.state.reviewCount ) {
    console.log(reviewCount)
    const { sortBy, filterTracker } = this.state;
    const { productID } = this.props;
    axios.get(`/api/reviews?product_id=${productID}&count=${reviewCount}&sort=${sortBy}`)
      .then((resp) => {
        const reviews = resp.data.results.map((review) => (
          { ...review, display: filterTracker[review.rating] }
        ));
        this.setState({
          reviews,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleSortBy(sortBy) {
    this.setState({
      sortBy,
    }, () => {
      const { reviewCount } = this.state;
      this.getAllReviews(reviewCount);
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
      .then(() => {
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMoreReviews(productID) {
    this.getMetaReview(productID);
  }

  filterReviewsByRating(rating, displayStatus) {
    const { reviews, filterTracker } = this.state;
    let filterValues = Object.values(filterTracker);
    if (filterValues.every((val) => val === true)) {
      for (let prop in filterTracker) {
        if (parseInt(prop) !== rating) {
          filterTracker[prop] = false;
        }
      }
    } else {
      filterTracker[rating] = !filterTracker[rating];
    }
    filterValues = Object.values(filterTracker);
    if (filterValues.every((val) => val === false)) {
      for (let prop in filterTracker) {
          filterTracker[prop] = true;
      }
    }

    const filteredReviews = reviews.map((item) => {
      const reviewData = { ...item };
      reviewData.display = filterTracker[reviewData.rating];
      return reviewData;
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
      sortBy,
    } = this.state;
    return (
      <section className={styles.ratingsAndReviews}>
        <h2 className={styles.sectionTitle}>Ratings & Reviews</h2>
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
              sortBy={sortBy}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default RatingsAndReviews;
