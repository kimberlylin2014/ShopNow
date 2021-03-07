/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React, { createRef, useRef, useState, useEffect } from 'react';
import Card from './Card.jsx';
import styles from './carouselStyle.css';

const RelatedProducts = ({ relatedItems, styleIndex, toggleModal, changeCurrentProduct }) => {
  const [leftArrow, setLeftArrow] = useState(<div />);
  const [rightArrow, setRightArrow] = useState(<div />);
  const container = createRef(null);

  const cards = relatedItems.map((product) => (
    <Card key={product.id} product={product} styleIndex={styleIndex} type="related" toggleModal={toggleModal} changeCurrentProduct={changeCurrentProduct} />
  ));

  const scroll = (scrollOffset) => {
    console.log('scrollLeft: ', container.scrollLeft);
    console.log('scrollWidth: ', container.scrollWidth);
    console.log('clientWidth: ', container.clientWidth);
    container.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    if (container.current.scrollLeft > 0) {
      setLeftArrow(
        <img
          src="icons/leftArrow.png"
          className={styles.leftArrow}
          onClick={() => scroll(-245)}
          alt="leftArrow"
        />
      );
    }

    if (container.current.clientWidth < container.current.scrollWidth) {
      setRightArrow(
        <img
          src="icons/rightArrow.png"
          className={styles.rightArrow}
          onClick={() => scroll(245)}
          alt="rightArrow"
        />
      );
    }
  });

  return (
    <div className={styles.carouselSection}>
      {rightArrow}
      <div
        className={styles.carousel}
        id="relatedContainer"
        ref={container}
      >
        <div className={styles.cards}>{cards}</div>
      </div>
      {leftArrow}
    </div>
  );
};

export default RelatedProducts;
