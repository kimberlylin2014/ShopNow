import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Styles from './Thumbnails.css';

const Thumbnails = ({ index, photos, name, styleId, selected, updateStyleId, imageThumbnail, currentStyle}) => {

  return (
    <div>
      <Thumbnail
      currentStyle={currentStyle}
      imageThumbnail={imageThumbnail}
      index={index}
      selected={selected}
      url={photos[0].thumbnail_url}
      alt={name}
      styleId={styleId}
      key={photos[0].thumbnail_url}
      updateStyleId={updateStyleId}
    />
    </div>
  );
};

// Thumbnails.propTypes = {
//   url: PropTypes.string.isRequired,
// };

export default Thumbnails;
