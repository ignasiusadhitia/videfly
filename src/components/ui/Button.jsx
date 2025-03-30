import React from 'react';

import PropTypes from 'prop-types';

import { Icon, Spinner } from '@ui';

const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    gray: 'px-5 bg-surface text-gray-paragraph line-height-tight',
    primary: '',
    gradient: 'bg-purple-mix text-white font-semibold',
  };

  // Size styles
  const sizeStyles = {
    small:
      'w-[111px] h-[44px] py-[10px] shadow-xs text-base font-semibold letter-spacing-normal',
    medium: '',
    large: 'w-[202px] h-[47px] p-[10px] flex gap-[10px]',
  };

  // Base classes
  const baseClasses = 'flex justify-center items-center rounded-xl';

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
        <Spinner />
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
};

export default Button;
