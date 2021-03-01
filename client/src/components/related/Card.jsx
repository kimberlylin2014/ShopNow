/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardStyle.css';

class Card extends React.Component {

  onCardClick() {
    // call function in App component to load product detail page for selected product
  }

  onStarClick() {
    // call toggleModal function in relatedItems and pass in selected product
  }

  onAddClick() {
    // call loadOutfitItem in relatedItems and pass in selected product
  }

  onCloseClick() {
    // call removeOutfitItem in relatedItems and pass in selected product
  }

  render() {
    const { category, name, type, price } = this.props;
    if (type === 'add') {
      return (
        <div className={styles.card}>Add to Outfit</div>
      );
    }
    return (
      <div className={styles.card}>
        <div className={styles.cardTop}>
          {/* <img
            alt={this.props.product.name}
            src={this.props.product.thumbnailURLs[0]}
            className={styles.image} /> */}
          <div className={styles.icon}>*</div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.category}>{category}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

Card.defaultProps = {
  category: '',
  name: '',
  type: '',
};

export default Card;
