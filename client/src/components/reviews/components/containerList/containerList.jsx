import React from 'react';
import PropTypes from 'prop-types';
import styles from './containerList.css';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import SortBy from '../sortBy/sortBy.jsx';
import MoreReviewsButton from '../moreReviewsButton/moreReviewsButton.jsx';
import AddReviewButton from '../addReviewButton/addReviewButton.jsx';
import FormPostReview from '../formPostReview/formPostReview.jsx';

class ContainerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostReviewForm: false,
    };
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
  }

  toggleFormDisplay() {
    const { displayPostReviewForm } = this.state;
    this.setState({
      displayPostReviewForm: !displayPostReviewForm,
    });
  }

  render() {
    const { displayPostReviewForm } = this.state;
    const { metaReview, productInfo, reviews, addReview, updateHelpfulByReviewID, totalReviews, toggleSortBy, displayAddReviewButton } = this.props;
    return (
      <div className={styles.containerList}>
        <SortBy totalReviews={totalReviews} toggleSortBy={toggleSortBy} />
        <ReviewsList reviews={reviews} updateHelpfulByReviewID={updateHelpfulByReviewID} />
        <MoreReviewsButton displayAddReviewButton={displayAddReviewButton} />
        <AddReviewButton toggleFormDisplay={this.toggleFormDisplay} />
        {displayPostReviewForm ? (
          <FormPostReview
            metaReview={metaReview}
            productInfo={productInfo}
            addReview={addReview}
            toggleFormDisplay={this.toggleFormDisplay}
          />
        ) : null}
      </div>
    );
  }
}

ContainerList.defaultProps = {
  reviews: [],
};

ContainerList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ContainerList;
