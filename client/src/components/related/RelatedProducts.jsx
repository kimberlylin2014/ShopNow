/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import Card from './Card.jsx';
import styles from './relatedProductsStyle.css';

class RelatedProducts extends React.Component {
  render() {
    const { relatedItems, styleIndex, toggleModal, changeCurrentProduct } = this.props;
    const cards = relatedItems.map((product) => (
      <Card key={product.id} product={product} styleIndex={styleIndex} type="related" toggleModal={toggleModal} changeCurrentProduct={changeCurrentProduct} />
    ));
    return (
      <div className={styles.related}>
        {cards}
      </div>
    );
  }
}

export default RelatedProducts;