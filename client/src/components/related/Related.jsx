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
    // this.loadFeatures();
    // this.loadRatings();
  }

  loadProduct(productID) {
    return axios.get(`/api/products/${productID}`)
    .then((resp) => {
      const product = {};
      product.id = resp.data.id;
      product.name = resp.data.name;
      product.category = resp.data.category;
      product.price = resp.data.default_price;
      product.features = resp.data.features;
      return product;
    })
    .catch((err) => console.log(err));
  }

  loadRelatedItems(productID) {
    axios.get(`/api/products/${productID}/related`)
    .then((resp) => resp.data)
    .then((array) => Promise.all(array.map((itemID) => this.loadProduct(itemID))))
    .then((relatedItems) => {
      console.log('related:', relatedItems);
      this.setState({ relatedItems })
    })
    .catch((err) => console.log(err));
  }

  loadRelatedFeatures() {

  }

  loadFeatures() {

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
    //console.log(this.state.currentProduct);
    console.log('state:', this.state.relatedItems);
    const { relatedItems, outfitItems } = this.state;
    return (
      <div className={styles.component}>
        <div className={styles.heading}>RELATED PRODUCTS</div>
        <div className={styles.relatedSection}>
          {console.log('just before map: ', relatedItems)}
          {relatedItems.map((product) => {
            {console.log('inside render:', product)}
            return (<Card
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
            />
          );
        }
        )}
        </div>

        <div className={styles.heading}>YOUR OUTFIT</div>
        <div className={styles.outfitSection}>
          <Card key="0" className={styles.addCard} type="add" />
          {outfitItems.map((product) => (
            <Card
              key={product.id}
              className={styles.outfitCard}
              type="outfit"
              category={product.category}
              name={product.name}
              removeOutfitItem={this.removeOutfitItem}
            />
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

//className={styles.relatedCard}