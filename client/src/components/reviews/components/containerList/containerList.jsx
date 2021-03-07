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
      displayPostReviewForm: false,
      modalDisplay: 'none',
    };
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.handleOpenModalButtonClick = this.handleOpenModalButtonClick.bind(this);
    this.handleCloseModalButtonClick = this.handleCloseModalButtonClick.bind(this);
  }

  toggleFormDisplay() {
    const { displayPostReviewForm } = this.state;
    this.setState({
      displayPostReviewForm: !displayPostReviewForm,
    });
  }


  handleOpenModalButtonClick(e) {
    document.body.scroll = 'no';
    document.documentElement.style.overflow = 'hidden';
    this.setState({
      modalDisplay: 'block',
    })
  }

  handleCloseModalButtonClick(e) {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
    this.setState({
      modalDisplay: 'none',
    });
  }

  render() {
    // const { displayPostReviewForm } = this.state;
    const {
      metaReview,
      productInfo,
      reviews,
      addReview,
      updateHelpfulByReviewID,
      totalReviews,
      toggleSortBy,
      displayMoreReviewsButton
    } = this.props;
    return (
      <div className={styles.containerList}>
        <SortBy
          totalReviews={totalReviews}
          toggleSortBy={toggleSortBy}
        />
        <ReviewsList
          reviews={reviews}
          updateHelpfulByReviewID={updateHelpfulByReviewID}
        />

        <div className={styles.flex}>
          <MoreReviewsButton
            displayMoreReviewsButton={displayMoreReviewsButton}
          />
           <AddReviewButton
             toggleFormDisplay={this.toggleFormDisplay}
            handleOpenModalButtonClick={this.handleOpenModalButtonClick}
          />
        </div>

        <FormModal
          modalDisplay={this.state.modalDisplay}
          handleCloseModalButtonClick={this.handleCloseModalButtonClick}
          metaReview={metaReview}
          productInfo={productInfo}
          addReview={addReview}
        />
        {/* {displayPostReviewForm ? (
          <FormPostReview
            metaReview={metaReview}
            productInfo={productInfo}
            addReview={addReview}
            toggleFormDisplay={this.toggleFormDisplay}
          />
        ) : null} */}
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


