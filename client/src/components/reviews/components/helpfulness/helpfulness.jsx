import React from 'react';
import styles from './helpfulness.css';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledYes: false,
      disabledNo: false,
      notHelpfulCount: 0,
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleNotHelpfulClick = this.handleNotHelpfulClick.bind(this);
  }

  handleHelpfulClick() {
    const { review: { review_id }, updateHelpfulByReviewID } = this.props;
    this.setState({
      disabledYes: true,
      disabledNo: true,
    }, () => {
      updateHelpfulByReviewID(review_id);
    });
  }

  handleNotHelpfulClick() {
    this.setState({
      disabledYes: true,
      disabledNo: true,
      notHelpfulCount: 1,
    });
  }

  render() {
    const {
      disabledYes, disabledNo, notHelpfulCount,
    } = this.state;
    const { review } = this.props;
    return (
      <p className={styles.helpful}>
        Helpful?
        <button
          type="button"
          className={styles.helpfulButton}
          onClick={this.handleNotHelpfulClick}
          disabled={disabledNo}
        >
          No
        </button>
        <span>
          (
          {notHelpfulCount}
          )
        </span>
        <button
          type="button"
          className={styles.helpfulButton}
          onClick={this.handleHelpfulClick}
          disabled={disabledYes}
          // style={{ backgroundColor, color: textColor, cursor }}
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
