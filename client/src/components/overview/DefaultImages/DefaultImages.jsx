import React from 'react';
import PropTypes from 'prop-types';
import styles from './DefaultImages.css';

const DefaultImages = ({
  photos, alt, key, allStyles,
}) => {
  console.log(photos, allStyles);
  if (photos) {
    const displayImages = photos.map((pic, index) => <img className={styles.mainImage} src={pic.url} alt={alt} key={index} />);
    return <div>{ displayImages }</div>;
  }
  return <div />;
};

// DefaultImages.propTypes = {
//   photos: PropTypes.string.isRequired,
// };

export default DefaultImages;
