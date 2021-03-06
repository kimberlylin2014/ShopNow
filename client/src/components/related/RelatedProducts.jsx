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
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.carouselSection}>
      <img
        src="icons/leftArrow.png"
        className={styles.leftArrow}
        onClick={() => scroll(-245)}
        alt="leftArrow"
      />
      <div className={styles.carousel} id="relatedContainer">
        {cards}
      </div>
      <img
        src="icons/rightArrow.png"
        className={styles.rightArrow}
        onClick={() => scroll(245)}
        alt="rightArrow"
      />
    </div>
  );
};

export default RelatedProducts;