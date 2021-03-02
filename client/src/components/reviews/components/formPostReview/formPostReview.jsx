import React from 'react';
import styles from './formPostReview.css';
import FormInput from '../formInput/formInput.jsx';
import FormTextArea from '../formTextArea/formTextArea.jsx';
import CharacteristicInputs from '../characteristicInputs/characteristicInputs.jsx';

class FormPostReview extends React.Component {
  static createCharacteristicState(metaReview) {
    const { characteristics } = metaReview;
    const characteristicStateObj = {};
    const values = Object.values(characteristics);
    values.forEach((value) => {
      characteristicStateObj[value.id] = '';
    });
    return characteristicStateObj;
  }

  constructor(props) {
    super(props);
    this.state = {
      product_id: props.metaReview.product_id,
      rating: '',
      recommend: '',
      characteristics: FormPostReview.createCharacteristicState(props.metaReview),
      summary: '',
      body: '',
      name: '',
      email: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    if (Number.isNaN(parseInt(name))) {
      this.setState({
        [name]: value,
      });
    } else {
      const { characteristics } = this.state;
      this.setState({
        characteristics: {
          ...characteristics,
          [name]: value,
        },
      });
    }
  }

  render() {
    const {
      summary, body, name, email, rating,
    } = this.state;

    const {
      metaReview : { characteristics }
    } = this.props;

    return (
      <div>
        <h3>Write Your Review about [Product Name ]</h3>
        <form>
          <CharacteristicInputs characteristics={characteristics} handleInputChange={this.handleInputChange} />
          <div>
            Overall Rating
            <FormInput
              htmlFor="rating"
              type="number"
              name="rating"
              value={rating}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div>
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
          <div>
            <FormInput
              htmlFor="summary"
              type="text"
              name="summary"
              value={summary}
              handleInputChange={this.handleInputChange}
              label="Summary"
            />
          </div>
          <div>
            <FormTextArea
              htmlFor="body"
              name="body"
              value={body}
              handleInputChange={this.handleInputChange}
              label="Review Body"
            />
          </div>
          <div>
            <FormInput
              htmlFor="name"
              type="text"
              name="name"
              value={name}
              handleInputChange={this.handleInputChange}
              label="Nickname"
            />
          </div>
          <div>
            <FormInput
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
