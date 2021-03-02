import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail/Thumbnail.jsx';

const Thumbnails = ({ photos, name, styleId, changeStyle}) => {
  const displayThumbnail = photos.map((thumbnail) => (
    <Thumbnail
      url={thumbnail.thumbnail_url}
      alt={name}
      styleId={styleId}
      key={Math.random() * styleId}
      changeStyle={changeStyle}
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
