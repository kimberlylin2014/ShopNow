import React from 'react';
import axios from 'axios';
import styles from './style.css';
import API from '../../../../config';
import Category from './Category/Category.jsx';
import ProductTitle from './ProductTitle/ProductTitle.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import ProductFeatures from './ProductFeatures/ProductFeatures.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import Price from './Price/Price.jsx';
import DefaultImages from './DefaultImages/DefaultImages.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      slogan: '',
      desciprtion: '',
      features: ['features'],
      styles: [],
      styleId: '',
      originalPrice: '',
      salePrice: '',
      photos: [],
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.defaultStyle = this.defaultStyle.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.updateStyleId = this.updateStyleId.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
    this.getProductStyles();
  }

  getProductInfo() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14932', {
      headers:
        { Authorization: `${API}` },
    }).then((data) => {
      this.setState({
        title: data.data.name,
        category: data.data.category,
        slogan: data.data.slogan,
        desciprtion: data.data.description,
        features: data.data.features,
      });
    })
      .catch((err) => console.log('Err', err));
  }

  getProductStyles() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14932/styles', {
      headers:
        { Authorization: `${API}` },
    }).then((data) => {
      this.setState({
        styles: data.data.results,
      });
      this.defaultStyle();
    })
      .catch((err) => console.log('Err', err));
  }

  getPrice(styleId) {
    for (let i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i].style_id === styleId) {
        this.setState({
          originalPrice: this.state.styles[i].original_price,
          salePrice: this.state.styles[i].sale_price,
        });
      }
    }
  }

  getPhotos(styleId) {
    for (let i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i].style_id === styleId) {
        this.setState({
          photos: this.state.styles[i].photos,
        });
      }
    }
  }

  defaultStyle() {
    for (let i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i]['default?']) {
        this.setState({
          styleId: this.state.styles[i].style_id,
        });
        this.getPrice(this.state.styleId);
        this.getPhotos(this.state.styleId);
      }
    }
  }

  updateStyleId(id) {
    this.setState({
      styleId: id,
    });
  }

  render() {
    let selector = <div />;
    if (this.state.styles.length > 0) {
      selector = (
        <StyleSelector
          styles={this.state.styles}
          updateStyleId={this.updateStyleId}
        />
      );
    }

    return (
      <div>
        <Category category={this.state.category} />
        <ProductTitle title={this.state.title} />
        <Price originalPrice={this.state.originalPrice} salePrice={this.state.salePrice} />
        <DefaultImages photos={this.state.photos} alt={this.state.title} />
        <ProductOverview slogan={this.state.slogan} desciprtion={this.state.desciprtion} />
        <ProductFeatures features={this.state.features} />
        {selector}
        <AddToCart />
        <h1 className={styles.title}>Overview </h1>
      </div>
    );
  }
}

export default Overview;
