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
      currentStyleObj: '',
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
    const { productID } = this.props;
    this.getProductInfo(productID);
    this.getProductStyles(productID);
    this.getReviewCount(productID);
    this.getAverageRating(productID);
  }

  componentDidUpdate(prevProps) {
    const { productID } = this.props;
    if (prevProps.productID !== productID) {
      this.getProductInfo(productID);
      this.getProductStyles(productID);
      this.getReviewCount(productID);
      this.getAverageRating(productID);
    }
  }

  getProductInfo(productID) {
    axios.get(`/api/products/${productID}`).then((data) => {
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

  getProductStyles(productID) {
    axios.get(`api/products/${productID}/styles`).then((data) => {
      this.setState({
        styles: data.data.results,
      });
      this.defaultStyle();
    })
      .catch((err) => console.log('Err', err));
  }

  getReviewCount(productID) {
    axios.get(`/api/reviews/meta/${productID}`).then((data) => {
      let reviewCount = 0;
      for (const keys in data.data.recommended) {
        reviewCount += Number(data.data.recommended[keys]);
      }
      this.setState({
        numReviews: reviewCount,
      });
    })
      .catch((err) => console.log('Err', err));
  }

  getAverageRating(productID) {
    axios.get(`/api/reviews/meta/${productID}`).then((data) => {
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
          currentStyleObj: this.state.styles[i],
        });
        this.getPrice(this.state.styleId);
        this.getPhotos(this.state.styleId);
      }
    }
  }

  updateStyleId(id, index) {
    const promise = new Promise((resolve) => {
      this.props.changeStyleIndex(index);
      this.setState({
        styleId: id,
        styleIndex: index,
      });
      resolve();
    }).then(() => {
      this.getPrice();
      this.getPhotos();
      this.setState({
        currentStyleObj: this.state.styles[this.state.styleIndex],
      });
    });
  }

  render() {
    const {
      styleId,
      styleIndex,
      currentStyleObj,
      title,
      category,
      slogan,
      description,
      features,
      styles,
      originalPrice,
      salePrice,
      photos,
      numReviews,
      avgRating,
    } = this.state;

    const { onAddToCart } = this.props;
    const hideRating = !numReviews ? Styles.hidden : '';

    return (
      <div className={Styles.parent}>
        <div className={Styles.rowcontainer}>
          <DefaultImages photos={currentStyleObj.photos} />

          <div className={Styles.colcontainer}>
            <Category category={category} />
            <ProductTitle title={title} />
            <div className={hideRating}>
              <Rating reviewCount={numReviews} avgRating={avgRating} />
              {' '}
            </div>

            <br />

            <div className={Styles.Price}>
              <Price originalPrice={originalPrice} salePrice={salePrice} />
            </div>

            <p>
              <b>STYLE</b>
              {' '}
              {currentStyleObj.name}
            </p>
            <StyleSelector
              styles={styles}
              updateStyleId={this.updateStyleId}
              currentStyle={styleId}
            />
            {
              currentStyleObj
              && (
              <AddToCart
                currentStyleObj={currentStyleObj}
                onAddToCart={onAddToCart}
              />
              )
            }

          </div>
        </div>
        <div className={Styles.rowcontainer}>
          <ProductOverview slogan={slogan} desciprtion={description} />
          <ProductFeatures features={features} />
        </div>

        <div className={Styles.Share}>
          <Share />
        </div>
      </div>
    );
  }
}

export default Overview;
