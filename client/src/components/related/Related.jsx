/* eslint-disable no-console */
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
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeOutfitItem = this.removeOutfitItem.bind(this);
  }

  componentDidMount() {
    const { productID } = this.props;
    this.loadProduct(productID)
    .then((currentProduct) => this.setState({ currentProduct }));
    this.loadRelatedItems(productID);
  }

  loadProduct(productID) {
    let product;
    return axios.get(`/api/products/${productID}`)
    .then((resp) => resp.data)
    .then((data) => {
      product = data;
      return axios.get(`api/products/${productID}/styles`)
      .then((styleResp) => {
        product.styles = styleResp.data.results;
        return product;
      });
    })
    .catch((err) => console.log(err));
  }

  loadRelatedItems(productID) {
    axios.get(`/api/products/${productID}/related`)
    .then((resp) => resp.data)
    .then((array) => Promise.all(array.map((itemID) => this.loadProduct(itemID))))
    .then((relatedItems) => {
      this.setState({ relatedItems });
    })
    .catch((err) => console.log(err));
  }

  addToOutfit() {
    const { outfitItems } = this.state;
    outfitItems.push(this.state.currentProduct);
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
    const { relatedItems, outfitItems } = this.state;
    return (
      <div className={styles.component}>
        <div className={styles.heading}>RELATED PRODUCTS</div>
        <div className={styles.relatedSection}>
          {relatedItems.map((product) => (
            <Card product={product} type="related" />
          ))}
        </div>
        <div className={styles.heading}>YOUR OUTFIT</div>
        <div className={styles.outfitSection}>
          <Card product={null} type="add" addToOutfit={this.addToOutfit} />
          {outfitItems.map((product) => (
            <Card product={product} type="outfit" removeOutfitItem={this.removeOutfitItem} />
          ))}
        </div>
      </div>
    );
  }
}

Related.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default Related;
