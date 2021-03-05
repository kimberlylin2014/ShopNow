import React from 'react';
import PropTypes from 'prop-types';
import Thumbnails from './Thumbnails/Thumbnails.jsx';
import Styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    // this.imageNav = React.createRef();
  }

  // handleScroll(direction) {
  //   console.log(this.imageNav.current);
  //   if ( direction === 'top' ) {
  //     this.imageNav.current.scrollTop;
  //   }
  // }

  render() {
    const displayThumbnails = this.props.styles.map((style, index) => (
      <Thumbnails
        key={index}
        imageThumbnail = {this.props.imageThumbnail}
        currentStyle = {this.props.currentStyle}
        styleId={style.style_id}
        updateStyleId={this.props.updateStyleId}
        index={this.props.styles.indexOf(style)}
        selected={this.props.currentStyle}
        photos={style.photos}
        name={style.name}
      />
    ));

    const isImageGallery = this.props.imageThumbnail ? Styles.imageGallery : Styles.thumbnails;

    return (
      <div className={isImageGallery} ref={this.imageNav}>
        {displayThumbnails}
      </div>
    );
  }
}

// StyleSelector.propTypes = {
//   styles: PropTypes.string.isRequired,
// };

export default StyleSelector;
