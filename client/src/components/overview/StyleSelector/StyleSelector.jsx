import React from 'react';
import Thumbnails from './Thumbnails/Thumbnails.jsx';
import Styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

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

    return (
      <div className={Styles.thumbnails}>
        {displayThumbnails}
      </div>
    );
  }
}


export default StyleSelector;
