import React, { useState } from 'react';

import PropTypes from 'prop-types';

import * as Icons from '@icons';
import * as Images from '@images';
import { Icon, Image, Typography } from '@ui';

// Custom option component
const Options = ({ items, onSelect }) => (
  <div className="absolute w-[310px] lg:w-[430px] max-w-[430px] mt-16 rounded-lg py-2 shadow-shadow-custom2 bg-white">
    {items.map((item) => (
      <div
        key={item.id}
        className="w-full px-4 py-3 flex gap-3 bg-white hover:bg-offWhite cursor-pointer"
        onClick={() => onSelect(item.url)}
      >
        <Image
          className="rounded-xl"
          imageWidth="w-[42px]"
          src={Images[item.imgKey]}
        />
        <div className="truncate">
          <Typography
            className="block"
            color="text-black"
            tag="span"
            variant="poppins-medium-14"
          >
            {item.title}
          </Typography>

          <Typography tag="span" variant="poppins-regular-12">
            {item.url}
          </Typography>
        </div>
      </div>
    ))}
  </div>
);

Options.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};

// Custom select component
const Select = ({
  prefixIcon,
  placeholder,
  suffixIcon,
  optionItems,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (url) => {
    onSelectOption(url);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="relative w-[180px] lg:w-full max-w-[430px] h-[50px] py-2 pl-4 pr-2 flex items-center border-[1.55px] border-purple-primary rounded-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex gap-2 items-center flex-grow truncate">
          {/* Preffix icon */}
          <div>
            <Icon IconComponent={Icons[prefixIcon]} width="w-[24.84px]" />
          </div>

          {/* Custom input field */}
          <div className="w-full truncate">
            <Typography tag="span" variant="poppins-regular-14.4">
              {selectedOption ? selectedOption : placeholder}
            </Typography>
          </div>
        </div>

        {/* Suffix icon */}
        <div>
          <Icon
            IconComponent={Icons[suffixIcon]}
            className="cursor-pointer"
            width="w-6"
          />
        </div>
      </div>
      {isOpen && <Options items={optionItems} onSelect={handleSelectOption} />}
    </>
  );
};

Select.propTypes = {
  prefixIcon: PropTypes.element,
  placeholder: PropTypes.string,
  suffixIcon: PropTypes.element,
  optionItems: PropTypes.array,
  selectedOption: PropTypes.string,
  onSelectOption: PropTypes.func,
};

export default Select;
