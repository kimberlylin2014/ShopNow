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
    this.handleAddReviewButtonClick = this.handleAddReviewButtonClick.bind(this);
  }

  handleAddReviewButtonClick() {
    const { displayPostReviewForm } = this.state;
    this.setState({
      displayPostReviewForm: !displayPostReviewForm,
    });
  }

  render() {
    const { displayPostReviewForm } = this.state;
    const { metaReview, productInfo, reviews, addReview } = this.props;
    return (
      <div className={styles.containerList}>
        <SortBy />
        <ReviewsList reviews={reviews} />
        <MoreReviewsButton />
        <AddReviewButton handleAddReviewButtonClick={this.handleAddReviewButtonClick} />
        {displayPostReviewForm ? (
          <FormPostReview
            metaReview={metaReview}
            productInfo={productInfo}
            addReview={addReview}
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
