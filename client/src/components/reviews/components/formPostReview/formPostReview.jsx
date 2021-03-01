import React from 'react';
import styles from './formPostReview.css';

class FormPostReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      recommend: '',
      characteristics: {
        size: '',
        comfort: '',
      },
      summary: '',
      body: '',
      name: '',
      email: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      summary, body, name, email, rating,
    } = this.state;
    return (
      <div>
        <h3>Write Your Review about [Product Name ]</h3>
        <form>
          <div>
            <label htmlFor="rating">
              Overall Rating
              <input
                type="number"
                id="rating"
                name="rating"
                onChange={this.handleInputChange}
                value={rating}
              />
            </label>
          </div>
          <div>
            Do you recommend this product?
            <label htmlFor="yesRecommend">
              <input
                type="radio"
                id="yesRecommend"
                name="recommend"
                onChange={this.handleInputChange}
                value="true"
              />
              Yes
            </label>
            <label htmlFor="noRecommend">
              <input
                type="radio"
                id="noRecommend"
                name="recommend"
                onChange={this.handleInputChange}
                value="false"
              />
              No
            </label>
          </div>
          <div>
            <label htmlFor="summary">
              Summary:
              <input
                className={styles.textInput}
                type="text"
                id="summary"
                name="summary"
                placeholder="Best purchase ever!"
                onChange={this.handleInputChange}
                value={summary}
              />
            </label>
          </div>
          <div>
            <label htmlFor="body">
              Review:
              <textarea
                id="body"
                name="body"
                onChange={this.handleInputChange}
                className={styles.textInput}
              >
                {body}
              </textarea>
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Nickname:
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleInputChange}
                value={name}
                className={styles.textInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.handleInputChange}
                value={email}
                className={styles.textInput}
              />
            </label>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>

    );
  }
}

export default FormPostReview;
