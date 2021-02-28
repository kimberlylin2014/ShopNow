import React from 'react';
// import PropTypes from 'prop-types';
import ReviewsList from '../reviewsList/reviewsList.jsx';


const ContainerList = ({ reviews }) => (
  <div>
    <p>SORT BY</p>
    <ReviewsList reviews={reviews} />
    <button> MORE REVIEWS </button>
  </div>
);

ContainerList.defaultProps = {
  reviews: [],
};

// ContainerList.propTypes = {
//   reviews: PropTypes.array,
// };

export default ContainerList;
