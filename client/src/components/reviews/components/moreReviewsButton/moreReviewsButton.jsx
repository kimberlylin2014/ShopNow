import React from 'react';
import styles from './moreReviewsButton.css';

class MoreReviewsButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {displayMoreReviewsButton} = this.props;
    return (
      <React.Fragment>
        {displayMoreReviewsButton ? <button className={styles.buttonStyle}>MORE REVIEWS</button> : null}
      </React.Fragment>
    )
  }
};


export default MoreReviewsButton;
