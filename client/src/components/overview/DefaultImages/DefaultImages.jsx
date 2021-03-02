import React from 'react';
import PropTypes from 'prop-types';
import styles from './DefaultImages.css';

const DefaultImages = ({ photos, alt, key }) => {
  const displayImages = photos.map((pic) => <img className={styles.mainImage} src={pic.url} alt={alt} key={alt.toString().length * Math.random()} />);
  return <div>{ displayImages }</div>;
};

// DefaultImages.propTypes = {
//   photos: PropTypes.string.isRequired,
// };

export default DefaultImages;
