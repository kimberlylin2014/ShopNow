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
    console.log('inside helpfulness');
    console.log(review_id);
    console.log(updateHelpfulByReviewID);
    this.setState({
      disabled: false,
    }, function() {
      updateHelpfulByReviewID(review_id);
    });
  }

  render() {
    const { disabled } = this.state;
    const { review } = this.props;
    return (
      <p>
        Helpful?
        <button
          type="button"
          className={styles.underline}
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
