import React from 'react';
import axios from 'axios';
import styles from './style.css';
import API from '../../../../config';
import Category from './Category/Category.jsx';
import ProductTitle from './ProductTitle/ProductTitle.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      desciprtion: '',
    };
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  getProductInfo() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931', {
      headers:
        { Authorization: `${API}` },
    }).then((data) => {
      this.setState({
        title: data.data.name,
        category: data.data.category,
        desciprtion: data.data.description,
      });
    })
      .catch((err) => console.log('Err', err));
  }

  componentDidMount() {
    this.getProductInfo();
  }

  render() {
    return (
      <div>
        <Category category={this.state.category} />
        <ProductTitle title={this.state.title} />
        <h1 className={styles.title}>Overview </h1>
      </div>
    );
  }
}

export default Overview;
