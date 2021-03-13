import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Styles from './StyleSelector.css';

const StyleSelector = ({ styles, currentStyle, updateStyleId }) => {
  const displayThumbnails = styles.map((style) => (
    <Thumbnail
      key={style.photos[0].thumbnail_url}
      url={style.photos[0].thumbnail_url}
      currentStyle={currentStyle}
      styleId={style.style_id}
      updateStyleId={updateStyleId}
      index={styles.indexOf(style)}
      selected={currentStyle}
      alt={style.name}
    />
  ));

  return (
    <div className={Styles.thumbnails}>
      {displayThumbnails}
    </div>
  );
};

export default StyleSelector;
