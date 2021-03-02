import React from 'react';
import PropTypes from 'prop-types';
import styles from './containerList.css';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import SortBy from '../sortBy/sortBy.jsx';
import MoreReviewsButton from '../moreReviewsButton/moreReviewsButton.jsx';
import AddReviewButton from '../addReviewButton/addReviewButton.jsx';
import FormPostReview from '../formPostReview/formPostReview.jsx';

// const ContainerList = ({ reviews, metaReview, productID, productInfo}) => (
//   <div className={styles.containerList}>
//     <SortBy />
//     <ReviewsList reviews={reviews} />
//     <MoreReviewsButton />
//     <AddReviewButton />
//     <FormPostReview productID={productID} metaReview={metaReview} productInfo={productInfo} />
//   </div>
// );

class ContainerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayPostReviewForm: false,
    }
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
    const { productID, metaReview, productInfo, reviews } = this.props;
    return (
      <div className={styles.containerList}>
        <SortBy />
        <ReviewsList reviews={reviews} />
        <MoreReviewsButton />
        <AddReviewButton handleAddReviewButtonClick={this.handleAddReviewButtonClick}/>
        {displayPostReviewForm ? (
          <FormPostReview
            productID={productID}
            metaReview={metaReview}
            productInfo={productInfo}
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
