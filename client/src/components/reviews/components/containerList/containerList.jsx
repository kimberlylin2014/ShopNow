import React from 'react';
import PropTypes from 'prop-types';
import styles from './containerList.css';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import SortBy from '../sortBy/sortBy.jsx';
import MoreReviewsButton from '../moreReviewsButton/moreReviewsButton.jsx';
import AddReviewButton from '../addReviewButton/addReviewButton.jsx';
import FormPostReview from '../formPostReview/formPostReview.jsx';
import FormModal from '../formModal/formModal.jsx';

class ContainerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: 'none',
    };
    this.handleOpenModalButtonClick = this.handleOpenModalButtonClick.bind(this);
    this.handleCloseModalButtonClick = this.handleCloseModalButtonClick.bind(this);
  }

  handleOpenModalButtonClick(e) {
    document.body.scroll = 'no';
    document.documentElement.style.overflow = 'hidden';
    this.setState({
      modalDisplay: 'block',
    });
  }

  handleCloseModalButtonClick(e) {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
    this.setState({
      modalDisplay: 'none',
    });
  }

  render() {
    const { modalDisplay } = this.state;
    const {
      metaReview,
      productInfo,
      reviews,
      addReview,
      updateHelpfulByReviewID,
      totalReviews,
      toggleSortBy,
      displayMoreReviewsButton,
      loadMoreReviews,
      sortBy
    } = this.props;
    return (
      <div className={styles.containerList}>
        {totalReviews ? (
          <SortBy
            totalReviews={totalReviews}
            toggleSortBy={toggleSortBy}
            sortBy={sortBy}
          />
        ) : null}
        <ReviewsList
          reviews={reviews}
          updateHelpfulByReviewID={updateHelpfulByReviewID}
        />
        <p className={styles.noMoreReviewMessage}>{!displayMoreReviewsButton ? 'No Reviews to Load' : ''}</p>
        <div className={styles.flex}>
          <AddReviewButton
            toggleFormDisplay={this.toggleFormDisplay}
            handleOpenModalButtonClick={this.handleOpenModalButtonClick}
          />
          <MoreReviewsButton
            metaReview={metaReview}
            displayMoreReviewsButton={displayMoreReviewsButton}
            loadMoreReviews={loadMoreReviews}
          />
        </div>
        <FormModal
          modalDisplay={modalDisplay}
          handleCloseModalButtonClick={this.handleCloseModalButtonClick}
          metaReview={metaReview}
          productInfo={productInfo}
          addReview={addReview}
        />
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
