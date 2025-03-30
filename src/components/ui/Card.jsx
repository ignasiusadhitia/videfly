import React from 'react';

import PropTypes from 'prop-types';

import { useHover } from '@hooks/useHover';

import { Counter, Icon, Image, Typography } from '@ui';

const Card = ({
  imageSource,
  imageAlt,
  icon,
  headingText,
  bodyText,
  variant,
  onClick,
  isSelected,
  value,
  valueLabel,
}) => {
  const [hoverRef, isHovered] = useHover();
  const variants = {
    // Default
    default: (
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
    ),

    // Step card (tutorial section)
    step: (
      <div
        ref={hoverRef}
        className={`grid grid-cols-1 p-4 gap-3 rounded-xl border border-stroke bg-white cursor-pointer group transition-all duration-500 ease-in-out hover:shadow-shadow-custom ${isSelected && 'shadow-shadow-custom'}`}
        style={{
          border: (isSelected || isHovered) && '1px solid transparent',
          background:
            (isSelected || isHovered) &&
            'linear-gradient(white, white) padding-box, ' +
              'linear-gradient(185.48deg, #EEE2FF 17.78%, #9747FF 95.62%) border-box',
        }}
        onClick={onClick}
      >
        <Typography
          color={`${isSelected ? 'text-gradient text-gradient-purple' : 'text-black'} group-hover:text-gradient group-hover:text-gradient-purple transition-all duration-500 ease-in-out`}
          tag="h3"
          variant="poppins-semibold-20"
        >
          {headingText}
        </Typography>
        <Typography variant="poppins-regular-14-relaxed">{bodyText}</Typography>
      </div>
    ),

    // Value card (value point section)
    value: (
      <div className="grid gap-6 my-[11px] min-w-[309px]">
        <div className="grid grid-cols-2 gap-5 pb-[26px]">
          <Typography
            align="text-right"
            color="text-gradient text-gradient-purple"
            variant="nunito-bold-76"
          >
            <Counter target={value} />
          </Typography>
          <Typography
            align="text-left"
            color="text-gradient text-gradient-purple"
            variant="nunito-bold-76"
          >
            %
          </Typography>
        </div>
        <Typography align="text-center" variant="poppins-medium-16">
          {valueLabel}
        </Typography>
      </div>
    ),
  };
  return variants[variant] || variants.default;
};

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  headingText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  value: PropTypes.number,
  valueLabel: PropTypes.string,
};

export default Card;
