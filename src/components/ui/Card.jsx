import React from 'react';

import PropTypes from 'prop-types';

import { Icon, Image, Typography } from '@ui';

const Card = ({ imageSource, imageAlt, icon, headingText, bodyText }) => {
  return (
    <div className="grid grid-cols-1 rounded-xl bg-offWhite ">
      <div className="relative">
        <Image alt={imageAlt} src={imageSource} />
        <div className="h-[75px] w-full absolute bg-soft-gray blur-sm bottom-0"></div>
      </div>
      <div className="mt-[3.8px] px-6 pb-[26.2px]">
        <div className="flex items-center gap-3 mb-[13.8px]">
          <Icon IconComponent={icon} width="w-6" />
          <Typography color="text-black" tag="h3" variant="nunito-bold-19">
            {headingText}
          </Typography>
        </div>
        <Typography variant="poppins-regular-14.4">{bodyText}</Typography>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  headingText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default Card;
