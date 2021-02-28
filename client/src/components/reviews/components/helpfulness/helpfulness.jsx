import React from 'react';
import styles from './Helpfulness.css';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  handleHelpfulClick() {
    this.setState({
      disabled: false,
    });
  }

  render() {
    const { disabled } = this.state;
    const { helpfulness } = this.props;
    return (
      <p>
        Helpful?
        <button
          type="button"
          className={styles.underline}
          onClick={this.handleHelpfulClick}
          disabled={disabled}
        >
          Yes
        </button>
        <span>
          {helpfulness}
        </span>
      </p>
    );
  }
}

export default Helpfulness;
