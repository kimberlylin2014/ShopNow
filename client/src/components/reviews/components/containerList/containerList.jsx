import React from 'react';
// import PropTypes from 'prop-types';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import styles from './containerList.css';

const ContainerList = ({ reviews }) => (
  <div className={styles.containerList}>
    <p>SORT BY</p>
    <ReviewsList reviews={reviews} />
    <button> MORE REVIEWS </button>
  </div>
);

ContainerList.defaultProps = {
  reviews: [],
};

// ContainerList.propTypes = {
//   reviews: PropTypes.arrayOf(Proptypes.object),
// };

export default ContainerList;
