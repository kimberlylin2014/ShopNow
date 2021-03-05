import React from 'react';
import styles from './addReviewButton.css';
// class AddReviewButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     const { toggleFormDisplay } = this.props;
//     toggleFormDisplay();
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick} className={styles.buttonStyle}>ADD A REVIEW</button>
//     );
//   }
// };

const AddReviewButton = ({handleOpenModalButtonClick}) => (
  <button
    type="button"
    className={styles.buttonStyle}
    onClick={handleOpenModalButtonClick}>
    ADD A REVIEWS
  </button>
);


export default AddReviewButton;
