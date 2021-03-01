/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from './Card.jsx';
import styles from './relatedStyle.css';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProduct: {},
      relatedItems: [],
      outfitItems: [],
      showModal: false,
      selectedProduct: {},
    };
  }

  componentDidMount() {
    const { productID } = this.props;
    this.setState({ currentProduct: this.loadProduct(productID) });
    this.loadRelatedItems(productID);
  }

  loadProduct(productID) {
    const product = {};
    axios.get(`/api/products/${productID}`)
    .then((resp) => {
      product.id = resp.data.id;
      product.name = resp.data.name;
      product.category = resp.data.category;
      product.price = resp.data.default_price;
      product.features = resp.data.features;
    })
    .catch((err) => console.log(err));
    return product;
  }

  loadRelatedItems(productID) {
    axios.get(`/api/products/${productID}/related`)
    .then((resp) => resp.data)
    .then((array) => Promise.all(array.map(this.loadProduct)))
    .then((relatedItems) => this.setState({ relatedItems }))
    .catch((err) => console.log(err));
  }

  loadOutfitItem(item) {
    const { outfitItems } = this.state;
    outfitItems.push(item);
    this.setState({ outfitItems });
  }

  removeOutfitItem(item) {
    const { outfitItems } = this.state;
    const index = outfitItems.indexOf(item);
    outfitItems.splice(index, 1);
    this.setState({ outfitItems });
  }

  toggleModal(selectedProduct) {
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({ showModal });
    if (showModal && selectedProduct) {
      this.setState({ selectedProduct });
    }
  }

  render() {
    console.log(this.state.currentProduct);
    console.log(this.state.relatedItems);
    const { relatedItems, outfitItems } = this.state;
    return (
      <div className={styles.component}>
        <div className={styles.heading}>related products</div>
        <div className={styles.relatedSection}>
          {relatedItems.map((product) => <Card key={product.id} className={styles.relatedCard} type="related" category={product.category} name={product.name} />)}
        </div>
        <div className={styles.heading}>your outfit</div>
        <div className={styles.outfitSection}>
          <Card key="0" className={styles.addCard} type="add" />
          {outfitItems.map((product) => <Card key={product.id} className={styles.outfitCard} type="outfit" category={product.category} name={product.name} removeOutfitItem={this.removeOutfitItem} />)}
        </div>
      </div>
    );
  }
}

Related.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default Related;
