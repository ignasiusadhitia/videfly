import React from 'react';

import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  imageHeight,
  imageWidth,
  className,
  objectFit,
  loading,
}) => {
  return (
    <>
      {/* Main image */}
      <img
        alt={alt}
        className={`${imageWidth ? imageWidth : 'w-full'} ${imageHeight ? imageHeight : 'h-full'} ${objectFit ? objectFit : 'object-cover'} ${loading ? 'hidden' : 'block'} ${className}`}
        loading={loading || 'lazy'}
        src={src}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  skeletonHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  className: PropTypes.string,
  objectFit: PropTypes.oneOf([
    'object-contain',
    'object-cover',
    'object-fill',
    'object-none',
    'object-scale-down',
  ]),
  loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default Image;
