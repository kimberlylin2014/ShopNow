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
import Comparison from './Comparison.jsx';
import styles from './relatedStyle.css';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProduct: {},
      styleIndex: 0,
      relatedItems: [],
      outfitItems: [],
      showModal: false,
      selectedProduct: {},
    };
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productID !== this.props.productID) {
      const { productID } = this.props;
      this.loadProduct(productID)
      .then((currentProduct) => this.setState({ currentProduct }));
      this.loadRelatedItems(productID);
    }
    if (prevProps.styleID !== this.props.styleID) {
      const { styleID } = this.props;
      this.getStyleIndex(styleID);
    }
  }

  componentDidMount() {
    const { productID, styleID } = this.props;
    this.loadProduct(productID)
    .then((currentProduct) => {
      this.setState({ currentProduct });
      this.getStyleIndex(styleID);
    });
    this.loadRelatedItems(productID);
    this.setState({ outfitItems: JSON.parse(localStorage.getItem('outfitItems') || '[]') });
  }

  getStyleIndex(styleID) {
    const { currentProduct } = this.state;
    const styleIndex = currentProduct.styles.findIndex((style) => style.style_id === styleID);
    this.setState({ styleIndex });
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
    const { currentProduct } = this.state;
    const outfitItems = JSON.parse(localStorage.getItem('outfitItems'));
    const ids = outfitItems.map((item) => item.id);
    if (!ids.includes(currentProduct.id)) {
      outfitItems.push(currentProduct);
    }
    localStorage.setItem('outfitItems', JSON.stringify(outfitItems));
    this.setState({ outfitItems });
  }

  removeFromOutfit(item) {
   const { outfitItems } = this.state;
   const index = outfitItems.indexOf(item);
    if (index >= 0) {
      outfitItems.splice(index, 1);
      this.setState({ outfitItems });
      localStorage.setItem('outfitItems', JSON.stringify(outfitItems));
    }
  }

  toggleModal(selectedProduct) {
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({ showModal });
    if (showModal && selectedProduct) {
      this.setState({ selectedProduct });
    }
  }

  changeCurrentProduct(productID) {
    const { changeCurrentProduct } = this.props;
    changeCurrentProduct(productID);
    this.setState({ productID });
  }

  render() {
    const {
      relatedItems,
      outfitItems,
      showModal,
      currentProduct,
      styleIndex,
      selectedProduct,
    } = this.state;
    console.log(currentProduct);
    return (
      <div className={styles.component}>
        <div className={styles.heading}>RELATED PRODUCTS</div>
        <div className={styles.relatedSection}>
          {relatedItems.map((product) => (
            <Card key={product.id} product={product} styleIndex={styleIndex} type="related" toggleModal={this.toggleModal} changeCurrentProduct={this.changeCurrentProduct} />
          ))}
        </div>
        <div className={styles.heading}>YOUR OUTFIT</div>
        <div className={styles.outfitSection}>
          <Card product={null} type="add" addToOutfit={this.addToOutfit} />
          {outfitItems.map((product) => (
            <Card key={product.id} product={product} styleIndex={styleIndex} type="outfit" removeFromOutfit={this.removeFromOutfit} changeCurrentProduct={this.changeCurrentProduct} />
          ))}
        </div>
        { showModal
          ? (
            <Comparison
              current={currentProduct}
              selected={selectedProduct}
              toggleModal={this.toggleModal}
            />
          ) : null}
      </div>
    );
  }
}

Related.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default Related;
