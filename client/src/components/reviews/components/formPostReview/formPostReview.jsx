import React from 'react';
import styles from './formPostReview.css';
import FormInput from '../formInput/formInput.jsx';
import FormTextArea from '../formTextArea/formTextArea.jsx';
import CharacteristicInputs from '../characteristicInputs/characteristicInputs.jsx';

class FormPostReview extends React.Component {
  static createCharacteristicState(metaReview) {
    if (metaReview) {
      const { characteristics } = metaReview;
      const characteristicStateObj = {};
      const values = Object.values(characteristics);
      values.forEach((value) => {
        characteristicStateObj[value.id] = '';
      });
      return characteristicStateObj;
    }
    return '';
  }

  constructor(props) {
    super(props);
    this.state = {
      product_id: parseInt(props.metaReview ? props.metaReview.product_id : ''),
      rating: '',
      recommend: '',
      characteristics: FormPostReview.createCharacteristicState(props.metaReview),
      summary: '',
      body: '',
      name: '',
      email: '',
      photos: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleFormSubmit(e) {
    e.preventDefault();
    const { addReview } = this.props;
    addReview(this.state);
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
          {metaReview ? (
            <CharacteristicInputs
              characteristics={metaReview.characteristics}
              handleInputChange={this.handleInputChange}
            />
          ) : null}
          <div className={styles.formGroup}>
            Overall Rating
            <FormInput
              placeholder="1-5"
              htmlFor="rating"
              type="number"
              name="rating"
              value={rating}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            Do you recommend this product?
            <FormInput
              htmlFor="yesRecommend"
              type="radio"
              name="recommend"
              value="true"
              handleInputChange={this.handleInputChange}
              label="Yes"
            />
            <FormInput
              htmlFor="noRecommend"
              type="radio"
              name="recommend"
              value="false"
              handleInputChange={this.handleInputChange}
              label="No"
            />
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
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default FormPostReview;
