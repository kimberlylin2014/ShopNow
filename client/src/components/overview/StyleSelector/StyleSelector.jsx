import React from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails/Thumbnails.jsx';

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
        photos={style.photos}
        name={style.name}
        styleId={style.style_id}
        key={Math.random() * style.style_id}
        changeStyle={this.changeStyle}
      />
    ));
    return (
      <div>
        <p>
          Current Style:
          {this.state.currentStyle}
        </p>
        {displayThumbnails}
      </div>
    );
  }
}

// StyleSelector.propTypes = {
//   styles: PropTypes.string.isRequired,
// };

export default StyleSelector;
