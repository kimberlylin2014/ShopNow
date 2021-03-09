/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React, { createRef, useRef, useState, useEffect } from 'react';
import Card from './Card.jsx';
import styles from './carouselStyle.css';

const YourOutfit = ({
  outfitItems,
  styleIndex,
  addToOutfit,
  removeFromOutfit,
  changeCurrentProduct
}) => {

  const container = useRef(container);
  const [leftArrow, setLeftArrow] = useState(<div />);
  const [rightArrow, setRightArrow] = useState(<div />);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };

  const cards = outfitItems.map((product) => (
    <Card key={product.id} product={product} styleIndex={styleIndex} type="outfit" removeFromOutfit={removeFromOutfit} changeCurrentProduct={changeCurrentProduct} />
  ));
  cards.unshift(<Card product={null} type="add" addToOutfit={addToOutfit} />);

  useEffect(() => {
    const { scrollLeft, clientWidth, scrollWidth } = container.current;
    if (scrollLeft > 0) {
      setLeftArrow(
        <img
          src="icons/leftArrow.png"
          className={styles.leftArrow}
          onClick={() => scroll(-245)}
          alt="leftArrow"
        />
      );
    } else {
      setLeftArrow(<div className={styles.leftArrow} />);
    }

    if (clientWidth < scrollWidth
      && scrollLeft < scrollWidth - clientWidth - 20) {
      setRightArrow(
        <img
          src="icons/rightArrow.png"
          onClick={() => scroll(245)}
          alt="rightArrow"
        />
      );
    } else {
      setRightArrow(<div />);
    }
  });

  return (
    <div className={styles.carousel}>
      <div className={styles.leftArrow}>
        {leftArrow}
      </div>
      <div
        className={styles.cards}
        ref={container}
      >
        {cards}
      </div>
      <div className={styles.rightArrow}>
        {rightArrow}
      </div>
    </div>
  );
};

export default YourOutfit;
