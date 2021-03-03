import React from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails/Thumbnails.jsx';
import Styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayThumbnails = this.props.styles.map((style) => (
      <Thumbnails
        imageThumbnail = {this.props.imageThumbnail}
        index={this.props.styles.indexOf(style)}
        selected={this.props.currentStyle}
        photos={style.photos}
        name={style.name}
        styleId={style.style_id}
        updateStyleId={this.props.updateStyleId}
      />
    ));

    const isImageGallery = this.props.imageThumbnail ? Styles.imageGallery : Styles.thumbnails;


    return (
      <div className={isImageGallery}>
        {displayThumbnails}
      </div>
    );
  }
}

// StyleSelector.propTypes = {
//   styles: PropTypes.string.isRequired,
// };

export default StyleSelector;
