/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React, { createRef, useRef } from 'react';
import Card from './Card.jsx';
import styles from './carouselStyle.css';

const RelatedProducts = ({ relatedItems, styleIndex, toggleModal, changeCurrentProduct }) => {
  const cards = relatedItems.map((product) => (
    <Card key={product.id} product={product} styleIndex={styleIndex} type="related" toggleModal={toggleModal} changeCurrentProduct={changeCurrentProduct} />
  ));

  const container = document.getElementById('relatedContainer');

  const scroll = (scrollOffset) => {
    console.log('scrollLeft: ', container.scrollLeft);
    console.log('scrollWidth: ', container.scrollWidth);
    console.log('clientWidth: ', container.clientWidth);
    container.scrollLeft += scrollOffset;
  };

  const displayLeftArrow = () => {
    if (container.scrollLeft > 0) {
      return (
        <img
          src="icons/leftArrow.png"
          className={styles.leftArrow}
          onClick={() => scroll(-245)}
          alt="leftArrow"
        />
      );
    }
    return <div />;
  };

  const displayRightArrow = () => {
    if (container.clientWidth < container.scrollWidth) {
      return (
        <img
          src="icons/rightArrow.png"
          className={styles.rightArrow}
          onClick={() => scroll(245)}
          alt="rightArrow"
        />
      );
    }
    return <div />;
  };

  return (
    <div className={styles.carouselSection}>
      {
        document.getElementById('relatedContainer') ? displayLeftArrow() : null
      }
      <div
        className={styles.carousel}
        id="relatedContainer"
      >
        <div className={styles.cards}>{cards}</div>
      </div>
      {
        document.getElementById('relatedContainer') ? displayRightArrow() : null
      }
    </div>
  );
};

export default RelatedProducts;

/*

*/