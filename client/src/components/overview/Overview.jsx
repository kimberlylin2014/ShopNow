import React from 'react';
import axios from 'axios';
import Styles from './style.css';
import Category from './Category/Category.jsx';
import ProductTitle from './ProductTitle/ProductTitle.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import ProductFeatures from './ProductFeatures/ProductFeatures.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import Price from './Price/Price.jsx';
import Rating from './Rating/Rating.jsx';
import DefaultImages from './DefaultImages/DefaultImages.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import Share from './Share/Share.jsx';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      styleId: '',
      styleIndex: '',
      title: '',
      category: '',
      slogan: '',
      description: '',
      features: ['features'],
      styles: [],
      originalPrice: '',
      salePrice: '',
      photos: [],
      numReviews: 0,
      avgRating: 0,
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.defaultStyle = this.defaultStyle.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.updateStyleId = this.updateStyleId.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
    this.getProductStyles();
    this.getReviewCount();
    this.getAverageRating();
  }

  getProductInfo() {
    axios.get('/api/products/14297', {
    }).then((data) => {
      this.setState({
        title: data.data.name,
        category: data.data.category,
        slogan: data.data.slogan,
        description: data.data.description,
        features: data.data.features,
      });
    })
      .catch((err) => console.log('Err', err));
  }

  getProductStyles() {
    axios.get('api/products/14297/styles').then((data) => {
      this.setState({
        styles: data.data.results,
      });
      this.defaultStyle();
    })
      .catch((err) => console.log('Err', err));
  }

  getReviewCount() {
    axios.get('api/reviews/?page=1&count=5&sort=newest&product_id=14297').then((data) => {
      this.setState({
        numReviews: data.data.count,
      });
    })
      .catch((err) => console.log('Err', err));
  }

  getAverageRating() {
    axios.get('/api/reviews/meta/14297').then((data) => {
      let sumRating = 0;
      let count = 0;
      for (const keys in data.data.ratings) {
        sumRating += (data.data.ratings[keys] * keys);
        count += Number(data.data.ratings[keys]);
      }
      this.setState({
        avgRating: (sumRating / count),
      });
    })
      .catch((err) => console.log('Err', err));
  }

  getPrice() {
    this.setState({
      originalPrice: this.state.styles[this.state.styleIndex].original_price,
      salePrice: this.state.styles[this.state.styleIndex].sale_price,
    });
  }

  getPhotos() {
    this.setState({
      photos: this.state.styles[this.state.styleIndex].photos,
    });
  }

  defaultStyle() {
    for (let i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i]['default?']) {
        this.setState({
          styleIndex: i,
          styleId: this.state.styles[i].style_id,
        });
        this.getPrice(this.state.styleId);
        this.getPhotos(this.state.styleId);
      }
    }
  }

  updateStyleId(id, index) {
    let promise = new Promise((resolve) => {
      this.setState({
        styleId: id,
        styleIndex: index,
      });
      resolve();
    }).then(() => {
      this.getPrice();
      this.getPhotos();
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
            <div className={hideRating}>
              {' '}
              <Rating reviewCount={this.state.numReviews} avgRating={this.state.avgRating} />
              {' '}
            </div>
            <Category category={this.state.category} />
            <ProductTitle title={this.state.title} />
            <Price originalPrice={this.state.originalPrice} salePrice={this.state.salePrice} />
            {selector}
            <AddToCart />
          </div>
        </div>
        <div className={Styles.rowcontainer}>
          <ProductOverview slogan={this.state.slogan} desciprtion={this.state.description} />
          <ProductFeatures features={this.state.features} />
        </div>
        <Share />
      </div>
    );
  }
}

export default Overview;
