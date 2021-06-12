import React from 'react';
import styles from './helpfulness.css';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledYes: false,
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  handleHelpfulClick() {
    const { review: { review_id }, updateHelpfulByReviewID } = this.props;
    this.setState({
      disabledYes: true,
    }, () => {
      updateHelpfulByReviewID(review_id);
    });
  }

  render() {
    const { disabledYes } = this.state;
    const { review } = this.props;
    return (
      <p className={styles.helpful}>
        Helpful?
        <button
          type="button"
          className={styles.helpfulButton}
          onClick={this.handleHelpfulClick}
          disabled={disabledYes}
        >
          Yes
        </button>
        <span>
          (
          {review.helpfulness}
          )
        </span>
      </p>
    );
  }
}

export default Helpfulness;
