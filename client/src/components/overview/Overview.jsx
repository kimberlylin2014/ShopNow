import React from 'react';
import axios from 'axios';
import styles from './style.css';
import API from '../../../../config';
import Category from './Category/Category.jsx';
import ProductTitle from './ProductTitle/ProductTitle.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import ProductFeatures from './ProductFeatures/ProductFeatures.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      slogan: '',
      desciprtion: '',
      features: ['features'],
    };
    this.getProductInfo = this.getProductInfo.bind(this);
  }


  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931', {
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

  render() {
    return (
      <div>
        <Category category={this.state.category} />
        <ProductTitle title={this.state.title} />
        <ProductOverview slogan={this.state.slogan} desciprtion={this.state.desciprtion} />
        <ProductFeatures features={this.state.features} />
        <AddToCart />
        <h1 className={styles.title}>Overview </h1>
      </div>
    );
  }
}

export default Overview;
