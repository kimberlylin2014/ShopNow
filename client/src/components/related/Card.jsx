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

  onStarClick(event) {
    const { toggleModal, product } = this.props;
    toggleModal(product);
    event.stopPropagation();
  }

  onAddClick() {
    const { addToOutfit } = this.props;
    addToOutfit();
  }

  onCloseClick(event, product) {
    const { removeFromOutfit } = this.props;
    removeFromOutfit(product);
    event.stopPropagation();
  }

  getPrice() {
    const { product } = this.props;
    if (product.styles[0].sale_price) {
      return product.styles[0].sale_price;
    }
    return product.default_price;
  }

  render() {
    const { product, type } = this.props;
    if (type === 'add') {
      return (
        <div className={styles.card}>
          <div className={styles.addText}>Add to Outfit</div>
          <div className={styles.addIcon} onClick={() => this.onAddClick(product)}>
            <img src="icons/add.svg" alt="add" />
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
              <div className={styles.icon} onClick={(event) => this.onStarClick(event)}>
                <img src="icons/star.svg" alt="star" />
              </div>
            )
            : (
              <div className={styles.icon} onClick={(event) => this.onCloseClick(event, product)}>
                <img src="icons/close.svg" alt="close" />
              </div>
            )}
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{this.getPrice()}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
