/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card from './Card.jsx';
import styles from './yourOutfitStyle.css';

class YourOutfit extends React.Component {
  render() {
    const { outfitItems, styleIndex, addToOutfit, removeFromOutfit, changeCurrentProduct } = this.props;
    const cards = outfitItems.map((product) => (
      <Card key={product.id} product={product} styleIndex={styleIndex} type="outfit" removeFromOutfit={removeFromOutfit} changeCurrentProduct={changeCurrentProduct} />
    ));
    cards.unshift(<Card product={null} type="add" addToOutfit={addToOutfit} />);
    return (
      <div className={styles.outfit}>
        {cards}
      </div>
    );
  }
}

export default YourOutfit;