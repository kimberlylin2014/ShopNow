import React from 'react';
import styles from './ratingBreakdown.css';
import ProgressBar from '../progressBar/progressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.handleRatingBreakdownClick = this.handleRatingBreakdownClick.bind(this);
  }

  handleRatingBreakdownClick() {

  }

  render() {
    const { starNum } = this.props;
    return (
      <div
        onClick={this.handleRatingBreakdownClick}
        className={styles.ratingBreakdown}
      >
        {starNum}
        stars
        <ProgressBar />
      </div>
    );
  }
}

export default RatingBreakdown;
