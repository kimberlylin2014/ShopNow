/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardStyle.css';

class Card extends React.Component {
  // onCardClick() {
  //   // call function in App component to load product detail page for selected product
  // }

  // onStarClick() {
  //   // call toggleModal function in relatedItems and pass in selected product
  // }

  // onAddClick() {
  //   // call loadOutfitItem in relatedItems and pass in selected product
  // }

  // onCloseClick() {
  //   // call removeOutfitItem in relatedItems and pass in selected product
  // }

  render() {
    const { product } = this.props;
    if (product === null) {
      return (
        <div className={styles.card}>Add to Outfit</div>
      );
    }
    console.log(product);
    return (
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            className={styles.image}
            alt={product.name}
            src={product.styles[0].photos[0].url}
          />
          {/* <div className={styles.icon}>*</div> */}
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.isRequired,
};

export default Card;
