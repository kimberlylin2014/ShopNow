import React from 'react';
import styles from './moreReviewsButton.css';

class MoreReviewsButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreReviewClick = this.handleMoreReviewClick.bind(this);
  }

  handleMoreReviewClick() {
    const {loadMoreReviews} = this.props;
    loadMoreReviews();
  }

  render() {
    const {displayMoreReviewsButton} = this.props;
    let styleObj = {
      visibility: 'visible',
    };
    if (!displayMoreReviewsButton) {
      styleObj.visibility = 'hidden';
    }
    return (
      <React.Fragment>
         <button className={styles.buttonStyle} onClick={this.handleMoreReviewClick} style={styleObj}>MORE REVIEWS</button>
      </React.Fragment>
    );
  }
}


export default MoreReviewsButton;
