import React from 'react';
import styles from './formPostReview.css';
import FormInput from '../formInput/formInput.jsx';
import RadioInput from '../radioInput/radioInput.jsx';
import FormTextArea from '../formTextArea/formTextArea.jsx';
import CharacteristicInputs from '../characteristicInputs/characteristicInputs.jsx';
import StarRating from '../starRating/starRating.jsx';
import FormValidationMessage from '../formValidationMessage/formValidationMessage.jsx';
import { formIsValidated } from '../../utils/formValidation.js';

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
      bodyCounter: 50,
      name: '',
      email: '',
      photos: [],
      validationResult: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleStarRatingClick = this.handleStarRatingClick.bind(this);
    this.handleRadioInputChange = this.handleRadioInputChange.bind(this);
    this.handleBodyInputChange = this.handleBodyInputChange.bind(this);
    this.handleCharacteristicInputChange = this.handleCharacteristicInputChange.bind(this);
  }

  handleRadioInputChange(e) {
    let { name, value } = e.target;
    let selected = false;
    if (value === 'true') {
      selected = true;
    }
    this.setState({
      [name]: selected,
    });
  }

  handleBodyInputChange(e) {
    let { value } = e.target;
    this.setState({
      body: value,
      bodyCounter: 50 - value.length,
    });
  }

  handleInputChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleCharacteristicInputChange(e) {
    let { name, value } = e.target;
    const { characteristics } = this.state;
    this.setState({
      characteristics: {
        ...characteristics,
        [name]: parseInt(value),
      },
    });
  }

  handleStarRatingClick(starId) {
    this.setState({
      rating: starId,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { addReview, metaReview, handleCloseModalButtonClick } = this.props;
    const validatedResult = formIsValidated(this.state, metaReview);
    const values = Object.values(validatedResult);
    if (!values.includes(false)) {
      addReview({
        ...this.state,
        product_id: Number(metaReview.product_id),
      });
      handleCloseModalButtonClick();
    } else {
      this.setState({
        validatedResult: { ...validatedResult },
      });
    }
  }

  render() {
    const { summary, body, name, email, validatedResult, bodyCounter } = this.state;
    const { metaReview, productInfo } = this.props;
    return (
      <div className={styles.formPostReview}>
        <h3>
          {productInfo ? `Write Your Review about ${productInfo.name}` : null}
        </h3>
        <form onSubmit={this.handleFormSubmit}>
          <StarRating handleStarRatingClick={this.handleStarRatingClick} />
          <div className={`${styles.formGroup} ${styles.recommendInputs}`}>
            <div className={styles.requiredField}>
              Do you recommend this product?
            </div>
            <div className={styles.recommendInputs}>
              <div>
                <RadioInput
                  htmlFor="yesRecommend"
                  type="radio"
                  name="recommend"
                  handleRadioInputChange={this.handleRadioInputChange}
                  label="Yes"
                  value
                />
              </div>
              <div>
                <RadioInput
                  htmlFor="noRecommend"
                  type="radio"
                  name="recommend"
                  handleRadioInputChange={this.handleRadioInputChange}
                  label="No"
                  value={false}
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
            <p className={styles.disclaimer}>[60 characters max] </p>
          </div>
          <div className={styles.formGroup}>
            <FormTextArea
              placeholder="Why did you like the product or not"
              htmlFor="body"
              name="body"
              value={body}
              handleBodyInputChange={this.handleBodyInputChange}
              label="Review"
            />
            <div className={styles.bodyDisclaimer}>
              <span>[50-1000 characters]</span>
              <span className={styles.counter}>
                {bodyCounter <= 0 ? 'Minimum Reached' : `Minimum required characters left: ${bodyCounter}`}
              </span>
            </div>
          </div>
          <div className={styles.formGroup}>
            <FormInput
              placeholder="jamie123"
              htmlFor="name"
              type="text"
              name="name"
              value={name}
              handleInputChange={this.handleInputChange}
              label="Username"
            />
            <p className={styles.disclaimer}>
              [60 characters max] For privacy reasons, do not use your full name or email address.
            </p>
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
            <p className={styles.disclaimer}>
              [60 characters max] For authentication reasons, you will not be emailed.
            </p>
          </div>
          {metaReview ? (
            <CharacteristicInputs
              characteristics={metaReview.characteristics}
              handleCharacteristicInputChange={this.handleCharacteristicInputChange}
            />
          ) : null}
          <FormValidationMessage text={validatedResult} />
          <input type="submit" value="SUBMIT" className={styles.buttonStyle} />
        </form>
      </div>
    );
  }
}

export default FormPostReview;
