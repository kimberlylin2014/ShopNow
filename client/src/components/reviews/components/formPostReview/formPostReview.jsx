import React from 'react';
import styles from './formPostReview.css';
import FormInput from '../formInput/formInput.jsx';
import FormTextArea from '../formTextArea/formTextArea.jsx';
import CharacteristicInputs from '../characteristicInputs/characteristicInputs.jsx';
import StarRating from '../starRating/starRating.jsx';
import FormValidationMessage from '../formValidationMessage/formValidationMessage.jsx';

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
    this.setState({
      rating: starId,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { addReview, metaReview, handleCloseModalButtonClick } = this.props;
    // verify form before addReview


    //
    addReview({
      ...this.state,
      product_id: parseInt(metaReview.product_id)
    });
    handleCloseModalButtonClick();
  }

  render() {
    const { summary, body, name, email, rating } = this.state;

    const { metaReview, productInfo } = this.props;

    return (
      <div className={styles.formPostReview}>
        <h3>
          Write Your Review about
          {' '}
          {productInfo ? productInfo.name : null}
        </h3>
        <form onSubmit={this.handleFormSubmit}>
          <StarRating handleStarRatingClick={this.handleStarRatingClick}/>
          <div className={`${styles.formGroup} ${styles.recommendInputs}`}>
            <div className={styles.requiredField}>
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
              required={true}
            />
             <p className={styles.disclaimer}>[60 characters max] </p>
          </div>
          <div className={styles.formGroup}>
            <FormTextArea
              placeholder="Why did you like the product or not"
              htmlFor="body"
              name="body"
              value={body}
              handleInputChange={this.handleInputChange}
              label="Review Body"
              required={true}
            />
            <p className={styles.disclaimer}>[50-1000 characters] Counter: 0</p>
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
              required={true}
            />
            <p className={styles.disclaimer}>[60 characters max] For privacy reasons, do not use your full name or email address. </p>
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
              required={true}
            />
            <p className={styles.disclaimer}>[60 characters max] For authentication reaesons, you will not be emailed.</p>
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
