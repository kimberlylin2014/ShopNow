import React from 'react';
import styles from './ratingBreakdown.css';
import ProgressBar from '../progressBar/progressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      displayBorder: false,
    };
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleRatingClick(e) {
    e.stopPropagation();
    const { disable } = this.state;
    const { filterReviewsByRating, count } = this.props;
    if (count) {
      this.setState({
        disable: !disable,
      });
      filterReviewsByRating(parseInt(count));
    }
  }

  handleMouseEnter(e) {
    const { count } = this.props;
    if (count) {
      this.setState({
        displayBorder: true,
      });
    }
  }

  handleMouseLeave(e) {
    const { displayBorder } = this.state;
    const { count } = this.props;
    if (count) {
      this.setState({
        displayBorder: !displayBorder,
      });
    }
  }

  render() {
    const { starNum, percentRating, count = 0, totalReviews } = this.props;
    const { disable, displayBorder } = this.state;
    const opacity = disable ? 0.4 : 1;
    return (
      <div
        className={styles.ratingBreakdown}
        onClick={this.handleRatingClick}
        style={{opacity: opacity, cursor: displayBorder ? "pointer": "not-allowed"}}
      >
        <div className={styles.starNum}>{starNum} stars</div>
        <ProgressBar
          percentRating={totalReviews ? percentRating : 0}
          displayBorder={displayBorder}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
        {totalReviews ? `(${count})` : ''}
      </div>
    );
  }
}

export default RatingBreakdown;
