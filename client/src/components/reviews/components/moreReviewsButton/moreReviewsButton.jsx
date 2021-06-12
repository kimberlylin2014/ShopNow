import React from 'react';
import styles from './moreReviewsButton.css';

class MoreReviewsButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreReviewClick = this.handleMoreReviewClick.bind(this);
  }

  handleMoreReviewClick() {
    const { loadMoreReviews, metaReview } = this.props;
    loadMoreReviews(Number(metaReview.product_id));
  }

  render() {
    const { displayMoreReviewsButton } = this.props;
    const styleObj = {
      visibility: 'visible',
    };
    if (!displayMoreReviewsButton) {
      styleObj.visibility = 'hidden';
    }
    return (
      <>
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={this.handleMoreReviewClick}
          style={styleObj}
        >
          MORE REVIEWS
        </button>
      </>
    );
  }
}


export default MoreReviewsButton;
