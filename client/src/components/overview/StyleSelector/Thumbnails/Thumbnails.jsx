import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Styles from './Thumbnails.css';

const Thumbnails = ({ index, photos, name, styleId, changeStyle, selected, updateStyleId}) => {
  const displayThumbnail = photos.map((thumbnail) => (
    <Thumbnail
      index = {index}
      currSelected = {selected}
      url={thumbnail.thumbnail_url}
      alt={name}
      stylenum={styleId}
      key={thumbnail.thumbnail_url}
      changeStyle={changeStyle}
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
