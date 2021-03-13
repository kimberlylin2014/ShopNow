/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React, { useRef, useState } from 'react';
import Card from './Card.jsx';
import styles from './sectionStyle.css';

const Section = (props) => {
  const { name } = props;
  let cards;
  if (name === 'related') {
    const {
      relatedItems, toggleModal, changeCurrentProduct,
    } = props;
    cards = relatedItems.map((product) => (
      <Card key={product.id} product={product} type="related" toggleModal={toggleModal} changeCurrentProduct={changeCurrentProduct} />
    ));
  } else if (name === 'outfit') {
    const {
      outfitItems, addToOutfit, removeFromOutfit, changeCurrentProduct,
    } = props;
    cards = outfitItems.map((product) => (
      <Card key={product.id} product={product} type="outfit" removeFromOutfit={removeFromOutfit} changeCurrentProduct={changeCurrentProduct} />
    ));
    cards.unshift(<Card key="add" product={null} type="add" addToOutfit={addToOutfit} />);
  }

  const container = useRef(container);
  const [leftArrow, setLeftArrow] = useState(<div />);
  const [rightArrow, setRightArrow] = useState(<div />);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };

  const setArrows = () => {
    const { scrollLeft, clientWidth, scrollWidth } = container.current;
    if (scrollLeft > 0
      && clientWidth < scrollWidth) {
      setLeftArrow(
        <img
          src="icons/leftCaret.png"
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
          src="icons/rightCaret.png"
          onClick={() => scroll(245)}
          alt="rightArrow"
        />
      );
    } else {
      setRightArrow(<div className={styles.rightArrow} />);
    }
  };

  const debounce = (func, delay = 500) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.call(null, ...args);
      }, delay);
    };
  };

  window.addEventListener('resize', debounce(setArrows));

  return (
    <div onLoad={setArrows} className={styles.carousel}>
      <div className={styles.leftArrow}>
        {leftArrow}
      </div>
      <div
        className={styles.cards}
        ref={container}
        onScroll={setArrows}
      >
        {cards}
      </div>
      <div className={styles.rightArrow}>
        {rightArrow}
      </div>
    </div>
  );
};

export default Section;
