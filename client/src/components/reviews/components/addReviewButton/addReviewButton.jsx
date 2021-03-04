import React from 'react';

class AddReviewButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggleFormDisplay } = this.props;
    toggleFormDisplay();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Add a Review</button>
    );
  }
};

export default AddReviewButton;
