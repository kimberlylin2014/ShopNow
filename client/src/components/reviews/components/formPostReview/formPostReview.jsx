import React from 'react';
import styles from './formPostReview.css';
import FormInput from '../formInput/formInput.jsx';
import FormTextArea from '../formTextArea/formTextArea.jsx';
import CharacteristicInputs from '../characteristicInputs/characteristicInputs.jsx';
import StarRating from '../starRating/starRating.jsx';

class FormPostReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      rating: '',
      recommend: '',
      characteristics: '',
      summary: '',
      body: '',
      name: '',
      email: '',
      photos: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleStarRatingClick = this.handleStarRatingClick.bind(this);
  }

  handleInputChange(e) {
    let { name, value } = e.target;
    if (Number.isNaN(parseInt(name))) {
      if (name === 'rating') {
        value = parseInt(value);
      } else if (name === 'recommend') {
        value = value === 'true';
      }
      this.setState({
        [name]: value,
      });
    } else {
      const { characteristics } = this.state;
      this.setState({
        characteristics: {
          ...characteristics,
          [name]: parseInt(value),
        },
      });
    }
  }

  handleStarRatingClick(starId) {
    // const id = starId.slice(4);
    console.log(starId);
    console.log(typeof starId)
    // this.setState({
    //   rating: parseInt(id),
    // });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { addReview, metaReview, handleCloseModalButtonClick } = this.props;
    this.setState({
      product_id: parseInt(metaReview.product_id),
    }, () => {
      addReview(this.state);
      handleCloseModalButtonClick();
    });
  }

  render() {
    const { summary, body, name, email, rating } = this.state;

    const { metaReview, productInfo } = this.props;

    return (
      <div className={styles.formPostReview}>
        <h4>
          Write Your Review about
          {' '}
          {productInfo ? productInfo.name : null}
        </h4>
        <form onSubmit={this.handleFormSubmit}>
          <StarRating handleStarRatingClick={this.handleStarRatingClick}/>
          <div className={`${styles.formGroup} ${styles.recommendInputs}`}>
            <div>
              Do you recommend this product?
            </div>
            <div className={styles.recommendInputs}>
              <div>
                <FormInput
                  htmlFor="yesRecommend"
                  type="radio"
                  name="recommend"
                  value="true"
                  handleInputChange={this.handleInputChange}
                  label="Yes"
                />
              </div>
              <div>
                <FormInput
                  htmlFor="noRecommend"
                  type="radio"
                  name="recommend"
                  value="false"
                  handleInputChange={this.handleInputChange}
                  label="No"
                />
              </div>

            </div>
          </div>
          <div className={styles.formGroup}>
            <FormInput
              placeholder="Best purchase ever!"
              htmlFor="summary"
              type="text"
              name="summary"
              value={summary}
              handleInputChange={this.handleInputChange}
              label="Summary"
            />
          </div>
          <div className={styles.formGroup}>
            <FormTextArea
              placeholder="Why do you like the product or not?"
              htmlFor="body"
              name="body"
              value={body}
              handleInputChange={this.handleInputChange}
              label="Review Body"
            />
          </div>
          <div className={styles.formGroup}>
            <FormInput
              placeholder="jamie123"
              htmlFor="name"
              type="text"
              name="name"
              value={name}
              handleInputChange={this.handleInputChange}
              label="Nickname"
            />
          </div>
          <div className={styles.formGroup}>
            <FormInput
              placeholder="jamie@gmail.com"
              htmlFor="email"
              type="text"
              name="email"
              value={email}
              handleInputChange={this.handleInputChange}
              label="Email"
            />
          </div>
          {metaReview ? (
            <CharacteristicInputs
              characteristics={metaReview.characteristics}
              handleInputChange={this.handleInputChange}
            />
          ) : null}
          <input type="submit" value="SUBMIT" className={styles.buttonStyle}/>
        </form>
      </div>
    );
  }
}

export default FormPostReview;
