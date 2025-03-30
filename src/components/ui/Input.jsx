import React from 'react';

import PropTypes from 'prop-types';

const Input = ({ input }) => {
  const { label, type, name, placeholder, isRequired } = input;
  return (
    <div className="grid grid-cols-1 gap-[10px]">
      {type !== 'checkbox' && (
        <label className="text-gray-paragraph text-xs">
          {label}
          {isRequired && <sup className="text-red-dark">*</sup>}
        </label>
      )}
      <div className="flex gap-6">
        {type === 'tel' && (
          <input
            className="pb-[10px] border-b-[1.5px] w-[50px] border-disabled-button text-center"
            value="+62"
          />
        )}
        <input
          className="pb-[10px] border-b-[1.5px] border-disabled-button"
          name={name}
          placeholder={placeholder}
          type={type}
        />
        {type === 'checkbox' && (
          <label className="text-gray-paragraph text-xs">{label}</label>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'checkbox', 'email', 'tel']).isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
  }),
};

export default Input;
