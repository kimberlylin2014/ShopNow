import React from 'react';
import styles from './moreReviewsButton.css';

class MoreReviewsButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {displayAddReviewButton} = this.props;
    return (
      <div>
        {displayAddReviewButton ? <button className=>More Reviews</button> : null}
      </div>
    )
  }
};


export default MoreReviewsButton;
