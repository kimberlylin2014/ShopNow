/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';

// ROUTE TO GET THIS DATE: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14931&count=5&sort='relevance'
// const mockReviewsData = [
//   {
//     review_id: 147688,
//     rating: 2,
//     summary: 'Doloremque illo qui repellat.',
//     recommend: true,
//     response: '"Porro consequatur odio tempore molestiae suscipit iusto."',
//     body: 'Rerum enim qui incidunt. Velit architecto ut veritatis saepe aspernatur dicta consequatur veniam iste. Delectus molestiae aut voluptas eius culpa soluta libero id eos. Est iusto et.',
//     date: '2020-07-11T00:00:00.000Z',
//     reviewer_name: 'Janick_Wunsch81',
//     helpfulness: 34,
//     photos: [
//       {
//         id: 187128,
//         url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//       },
//       {
//         id: 187129,
//         url: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//       },
//       {
//         id: 187130,
//         url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//       },
//     ],
//   },
// ];

// CLIENT ROUTE: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=14931
// const mockMetaReview = {
//   product_id: '14931',
//   ratings: {
//     1: '5',
//     2: '8',
//     3: '15',
//     4: '8',
//     5: '3',
//   },
//   recommended: {
//     false: '5',
//     true: '34',
//   },
//   characteristics: {
//     Fit: {
//       id: 50013,
//       value: '2.9354838709677419',
//     },
//     Length: {
//       id: 50014,
//       value: '3.1612903225806452',
//     },
//     Comfort: {
//       id: 50015,
//       value: '3.0967741935483871',
//     },
//     Quality: {
//       id: 50016,
//       value: '3.0967741935483871',
//     },
//   },
// };

// Route https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931
// const productInfo = {
//   id: 14931,
//   campus: 'hr-sfo',
//   name: 'Manuela Pants',
//   slogan: 'Nemo ratione deserunt.',
//   description: 'Rerum quia tempore aperiam reiciendis. Eum a enim. Saepe magni tenetur et. Sit est beatae.',
//   category: 'Pants',
//   default_price: '398.00',
//   created_at: '2021-02-23T02:49:03.102Z',
//   updated_at: '2021-02-23T02:49:03.102Z',
//   features: [
//     {
//       feature: 'Non-GMO',
//       value: null,
//     },
//     {
//       feature: 'Material',
//       value: '"FullControl Skin"',
//     },
//   ],
// };

// 14040
// 14937
const productID = '14937';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: productID,
      reviews: [],
      metaReview: null,
      sortBy: 'newest',
      productInfo: null,
    };
    this.addReview = this.addReview.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.updateHelpfulByReviewID = this.updateHelpfulByReviewID.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
    this.getMetaReview();
    this.getProductInfo();
  }

  getProductInfo() {
    const { product_id } = this.state;
    axios.get(`/api/products/${product_id}`)
      .then((resp) => {
        this.setState({
          productInfo: {...resp.data}
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getMetaReview() {
    const { product_id } = this.state;
    axios.get(`/api/reviews/meta/${product_id}`)
      .then((resp) => {
        this.setState({
          metaReview: { ...resp.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllReviews() {
    const { product_id, sortBy } = this.state;
    axios.get(`/api/reviews?product_id=${product_id}&count=3&sort=${sortBy}`)
      .then((resp) => {
        this.setState({
          reviews: [...resp.data.results],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addReview(review) {
    axios.post('/api/reviews', review)
      .then((resp) => {
        this.getMetaReview();
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  updateHelpfulByReviewID(reviewID) {
    axios.put(`api/reviews/${reviewID}/helpful`)
      .then((resp) => {
        this.getAllReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { reviews, metaReview, productInfo } = this.state;
    return (
      <div className={styles.ratingsAndReviews}>
        <h4>Ratings & Reviews</h4>
        <div className={styles.moduleColumns}>
          <ContainerBreakdown metaReview={metaReview} />
          <ContainerList
            reviews={reviews}
            metaReview={metaReview}
            productInfo={productInfo}
            addReview={this.addReview}
            updateHelpfulByReviewID={this.updateHelpfulByReviewID}
          />
        </div>
      </div>
    );
  }
}

// const RatingsAndReviews = () => (
//   <div className={styles.ratingsAndReviews}>
//     <h4>Ratings & Reviews</h4>
//     <div className={styles.moduleColumns}>
//       <ContainerBreakdown metaReview={mockMetaReview} />
//       <ContainerList
//         reviews={mockReviewsData}
//         productID={productID}
//         metaReview={mockMetaReview}
//         productInfo={productInfo}
//       />
//     </div>
//   </div>
// );

export default RatingsAndReviews;
