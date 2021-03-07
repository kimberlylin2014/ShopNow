import React from 'react';
import styles from './Helpfulness.css';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  handleHelpfulClick() {
    const {review : {review_id}, updateHelpfulByReviewID } = this.props;
    this.setState({
      disabled: false,
    }, () => {
      updateHelpfulByReviewID(review_id);
    });
  }

  render() {
    const { disabled } = this.state;
    const { review } = this.props;
    return (
      <p className={styles.helpful}>
        Helpful?
        <button
          type="button"
          className={styles.helpfulButton}
          onClick={this.handleHelpfulClick}
          disabled={disabled}
        >
          Yes
        </button>
        <span>
          ({review.helpfulness})
        </span>
      </p>
    );
  }
}

export default Helpfulness;
