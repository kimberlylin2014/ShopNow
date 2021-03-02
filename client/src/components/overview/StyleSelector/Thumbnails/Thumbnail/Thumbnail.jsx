import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Thumbnail.css';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.changeStyle(e.target.alt);
  }

  render() {
    return (
      <img
        src={this.props.url}
        className={Styles.thumbnail}
        alt={this.props.alt}
        styleId={this.props.styleId}
        key={Math.random() * this.props.styleId}
        onClick={this.onClick}
      />
    );
  }
}

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;
