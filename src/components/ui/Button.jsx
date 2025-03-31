import React from 'react';

import PropTypes from 'prop-types';

import { Loading } from '@icons';
import { Icon } from '@ui';

const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  isLoading = false,
  className = '',
  isCustom = false,

  ...props
}) => {
  // Variant styles
  const variantStyles = {
    gray: 'px-5 bg-surface text-gray-paragraph line-height-tight shadow-xs text-base font-semibold letter-spacing-normal',
    primary: `bg-purple-primary text-white ${!isCustom && 'font-semibold'} hover:bg-purple-hover shadow-shadow-sm
`,
    gradient: 'bg-purple-mix text-white font-semibold hover:font-medium',
    outlined: `border-[1.5px] border-purple-primary text-purple-primary ${!isCustom && 'font-semibold'}`,
  };

  // Size styles
  const sizeStyles = {
    small: 'w-[111px] h-[44px] py-[10px] rounded-xl',
    medium: `${!isCustom && 'w-[116px]'}  h-[50px] px-[16.6px] py-[10.3px] rounded-[12.4px]`,
    large: 'w-[202px] h-[47px] p-[10px] flex gap-[10px] rounded-xl',
  };

  // Base classes
  const baseClasses =
    'flex justify-center items-center transition-all duration-500 ease-in-out';

  // Combine all classes
  const classes = [
    baseClasses,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ].join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {isLoading ? (
        <div className="w-[174px]">
          <Loading className="animate-spin text-white w-[21px] mx-auto" />
        </div>
      ) : (
        <>
          {label}
          {icon && <Icon IconComponent={icon} width="w-6" />}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  isCustom: PropTypes.bool,
};

export default Button;
