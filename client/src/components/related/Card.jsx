/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import styles from './cardStyle.css';
import Stars from '../Stars.jsx';

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
    const { product, type } = this.props;
    const { styleIndex } = product;
    const index = type === 'related' ? 0 : styleIndex;
    if (product.styles[index].sale_price) {
      return (
        <div className={styles.price}>
          <span className={styles.oldPrice}>
            $
            {product.default_price}
          </span>
          <span className={styles.newPrice}>
            $
            {product.styles[index].sale_price}
          </span>
        </div>
      );
    }
    return (
      <div className={styles.price}>
        ${product.default_price}
      </div>
    );
  }

  render() {
    const { product, type } = this.props;
    if (type === 'add') {
      return (
        <div className={styles.addCard}>
          <div className={styles.addText}>Add to Outfit</div>
          <div className={styles.addIcon} onClick={() => this.onAddClick(product)}>
            <img src="icons/add.png" alt="add" />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.card} onClick={() => this.onCardClick(product.id)}>
        <div className={styles.cardTop}>
          <LazyLoad height={330}>
            <img
              className={styles.image}
              alt={product.name}
              src={product.styles[product.styleIndex].photos[0].url || 'photos/noImage.png'}
            />
          </LazyLoad>
          { type === 'related'
            ? (
              <div className={styles.icon} onClick={(event) => this.onStarClick(event)}>
                <img src="icons/comparisonStar.png" alt="star" />
              </div>
            )
            : (
              <div className={styles.icon} onClick={(event) => this.onCloseClick(event, product)}>
                <img src="icons/close.png" alt="close" />
              </div>
            )}
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.name}>{product.name}</div>
          {this.getPrice()}
          <Stars className={styles.stars} numStars={product.averageRating} starsClass="cardStars" starClass="cardStar" />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
