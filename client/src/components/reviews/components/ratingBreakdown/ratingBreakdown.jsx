import React from 'react';
import styles from './ratingBreakdown.css';
import ProgressBar from '../progressBar/progressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { starNum } = this.props;
    return (
      <div
        className={styles.ratingBreakdown}
      >
        <div className={styles.starNum}>
          {starNum}
          stars
        </div>
        <ProgressBar />
      </div>
    );
  }
}

export default RatingBreakdown;
