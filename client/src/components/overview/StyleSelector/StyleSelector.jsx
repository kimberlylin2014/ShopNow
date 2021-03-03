import React from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails/Thumbnails.jsx';
import Styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.styles[0].name,
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(style) {
    this.setState({
      currentStyle: style,
    });
  }

  render() {
    const displayThumbnails = this.props.styles.map((style) => (
      <Thumbnails
        index={this.props.styles.indexOf(style)}
        selected={this.state.currentStyle}
        photos={style.photos}
        name={style.name}
        styleId={style.style_id}
        changeStyle={this.changeStyle}
        updateStyleId = {this.props.updateStyleId}
      />
    ));
    return (
      <div>
        <p>
          Current Style:
          {this.state.currentStyle}
        </p>
        <div className={Styles.thumbnails}>
          {displayThumbnails}
        </div>
      </div>
    );
  }
}

// StyleSelector.propTypes = {
//   styles: PropTypes.string.isRequired,
// };

export default StyleSelector;
