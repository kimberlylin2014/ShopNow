import React from 'react';
import styles from './ratingBreakdown.css';
import ProgressBar from '../progressBar/progressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { starNum, percentRating } = this.props;
    return (
      <div className={styles.ratingBreakdown}>
        <div>
          <span className={styles.starNum}>{starNum}</span>
          <span className={styles.starText}>{starNum === '1' ? ` star` : 'stars'}</span>
        </div>
        <ProgressBar percentRating={percentRating}/>
      </div>
    );
  }
}

export default RatingBreakdown;
