import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Styles from './Thumbnails.css';

const Thumbnails = ({ index, photos, name, styleId, selected, updateStyleId, imageThumbnail}) => {
  const displayThumbnail = photos.map((thumbnail) => (
    <Thumbnail
      imageThumbnail={imageThumbnail}
      index = {index}
      selected = {selected}
      url={thumbnail.thumbnail_url}
      alt={name}
      stylenum={styleId}
      key={thumbnail.thumbnail_url}
      updateStyleId={updateStyleId}
    />
  ));
  return (
    <div>
      {displayThumbnail}
    </div>
  );
};

// Thumbnails.propTypes = {
//   url: PropTypes.string.isRequired,
// };

export default Thumbnails;
