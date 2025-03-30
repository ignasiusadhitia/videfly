import React from 'react';

import PropTypes from 'prop-types';

import { Typography } from '@ui';

const Input = ({ input, error, value, onChange }) => {
  const { label, type, name, placeholder, isRequired } = input;
  return (
    <div className="grid grid-cols-1 gap-[10px]">
      {/* All input type label */}
      {type !== 'checkbox' && (
        <label className="text-gray-paragraph text-xs" htmlFor={name}>
          {label}
          {isRequired && <sup className="text-red-dark">*</sup>}
        </label>
      )}
      <div className="flex gap-6">
        {/* Tel input type */}
        {type === 'tel' && (
          <input
            readOnly
            className={`pb-[10px] border-b-[1.5px] w-[50px] ${error ? 'border-red-dark' : 'border-disabled-button'} text-center`}
            value="+62"
          />
        )}

        {/* All input type */}
        <input
          checked={value}
          className={`${type !== 'checkbox' && 'w-full'} pb-[10px] border-b-[1.5px] ${error ? 'border-red-dark' : 'border-disabled-button'} focus:outline-none focus:border-black`}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />

        {/* Checkbox label */}
        {type === 'checkbox' && (
          <label className="text-gray-paragraph text-xs" htmlFor={name}>
            {label}
          </label>
        )}
      </div>

      {/* Input error message */}
      {error && (
        <Typography
          className="mt-[10px]"
          color="text-red-dark"
          tag="span"
          variant="poppins-regular-14"
        >
          {error}
        </Typography>
      )}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
