import React from 'react';

import PropTypes from 'prop-types';

import { Image, Typography } from '@ui';

const Card = ({ imageSource, imageAlt, headingText, bodyText }) => {
  return (
    <div>
      <div>
        <Image alt={imageAlt} src={imageSource} />
      </div>
      <div>
        <Typography tag="h3">{headingText}</Typography>
        <Typography>{bodyText}</Typography>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default Card;
