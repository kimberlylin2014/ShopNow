/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card from './Card.jsx';
import styles from './carouselStyle.css';

const YourOutfit = ({
  outfitItems,
  styleIndex,
  addToOutfit,
  removeFromOutfit,
  changeCurrentProduct
}) => {
  const cards = outfitItems.map((product) => (
    <Card key={product.id} product={product} styleIndex={styleIndex} type="outfit" removeFromOutfit={removeFromOutfit} changeCurrentProduct={changeCurrentProduct} />
  ));
  cards.unshift(<Card product={null} type="add" addToOutfit={addToOutfit} />);

  const container = document.getElementById('outfitContainer');

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
      <div className={styles.carousel} id="outfitContainer">
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

export default YourOutfit;