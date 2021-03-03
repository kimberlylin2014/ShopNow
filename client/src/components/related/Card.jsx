/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardStyle.css';

class Card extends React.Component {
  onCardClick(productID) {
    const { changeCurrentProduct } = this.props;
    changeCurrentProduct(productID);
  }

  onStarClick() {
    const { toggleModal, product } = this.props;
    toggleModal(product);
  }

  onAddClick() {
    const { addToOutfit } = this.props;
    addToOutfit();
  }

  onCloseClick(product) {
    const { removeFromOutfit } = this.props;
    removeFromOutfit(product);
  }

  render() {
    const { product, type } = this.props;
    if (type === 'add') {
      return (
        <div className={styles.card}>
          <div className={styles.addText}>Add to Outfit</div>
          <div className={styles.addIcon} onClick={() => this.onAddClick(product)}>
            <img src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1614710642~hmac=55671093312b73aacfb2111113db6a36" alt="add" />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.card} onClick={() => this.onCardClick(product.id)}>
        <div className={styles.cardTop}>
          <img
            className={styles.image}
            alt={product.name}
            src={product.styles[0].photos[0].url}
          />
          { type === 'related'
            ? (
              <div className={styles.icon} onClick={() => this.onStarClick()}>
                <img src="https://img.icons8.com/fluent/48/000000/star.png" alt="star" />
              </div>
            )
            : (
              <div className={styles.icon} onClick={() => this.onCloseClick(product)}>
                <img src="https://www.flaticon.com/svg/vstatic/svg/1617/1617543.svg?token=exp=1614712431~hmac=0639bb3bb043dc3b9fadf08dcd69ab0d" alt="close" />
              </div>
            )}
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.default_price}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
