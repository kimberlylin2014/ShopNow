import React from 'react';
import axios from 'axios';
import Styles from './style.css';
import API from '../../../../config';
import Category from './Category/Category.jsx';
import ProductTitle from './ProductTitle/ProductTitle.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import ProductFeatures from './ProductFeatures/ProductFeatures.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import Price from './Price/Price.jsx';
import Rating from './Rating/Rating.jsx';
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
      numReviews: 0,
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
    this.defaultStyle = this.defaultStyle.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.updateStyleId = this.updateStyleId.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
    this.getProductStyles();
    this.getReviewCount();
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

  getReviewCount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?page=1&count=5&sort=newest&product_id=14932', {
      headers:
        { Authorization: `${API}` },
    }).then((data) => {
      this.setState({
        numReviews: data.data.count,
      });
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
    const hideRating = !this.state.numReviews ? Styles.hidden : '';

    return (
      <div>
        <div className={Styles.rowcontainer}>
          <DefaultImages photos={this.state.photos} alt={this.state.title} />
          <div className={Styles.colcontainer}>
            <div className={hideRating}> <Rating reviewCount={this.state.numReviews} /> </div>
            <Category category={this.state.category} />
            <ProductTitle title={this.state.title} />
            <Price originalPrice={this.state.originalPrice} salePrice={this.state.salePrice} />
            {selector}
            <AddToCart />
          </div>
        </div>
        <div className={Styles.rowcontainer}>
          <ProductOverview slogan={this.state.slogan} desciprtion={this.state.desciprtion} />
          <ProductFeatures features={this.state.features} />
        </div>
      </div>
    );
  }
}

export default Overview;
