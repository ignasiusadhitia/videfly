import React from 'react';

import PropTypes from 'prop-types';

const VARIANTS = {
  // Nunito Bold Variants
  'nunito-bold-19': {
    family: 'nunito',
    weight: 'font-bold',
    size: 'text-xl', // 19.2px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },
  'nunito-bold-40': {
    family: 'nunito',
    weight: 'font-bold',
    size: 'text-3xl', // 40px
    lineHeight: 'leading-snug', // 120%
    letterSpacing: 'tracking-tight', // -1%
  },
  'nunito-bold-40-alt': {
    family: 'nunito',
    weight: 'font-bold',
    size: 'text-3xl', // 40px
    lineHeight: 'leading-normal', // 130%
    letterSpacing: 'tracking-normal', // 0%
  },
  'nunito-bold-48': {
    family: 'nunito',
    weight: 'font-bold',
    size: 'text-4xl', // 48px
    lineHeight: 'leading-normal', // 130%
    letterSpacing: 'tracking-normal',
  },
  'nunito-bold-76': {
    family: 'nunito',
    weight: 'font-bold',
    size: 'text-5xl', // 76px
    lineHeight: 'leading-normal', // 130%
    letterSpacing: 'tracking-normal', // 0%
  },

  // Poppins Regular Variants
  'poppins-regular-16': {
    family: 'sans',
    weight: 'font-normal',
    size: 'text-base', // 16px
  },
  'poppins-regular-14': {
    family: 'sans',
    weight: 'font-normal',
    size: 'text-xs', // 14px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },
  'poppins-regular-14-wide': {
    family: 'sans',
    weight: 'font-normal',
    size: 'text-xs', // 14px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-wide', // 1%
  },
  'poppins-regular-14-relaxed': {
    family: 'sans',
    weight: 'font-normal',
    size: 'text-xs', // 14px
    lineHeight: 'leading-relaxed', // 150%
    letterSpacing: 'tracking-normal', // 0%
  },
  'poppins-regular-14.4': {
    family: 'sans',
    weight: 'font-normal',
    size: 'text-sm', // 14.4px
    lineHeight: 'leading-normal', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },

  // Poppins Medium Variants
  'poppins-medium-14': {
    family: 'sans',
    weight: 'font-medium',
    size: 'text-xs', // 14px
    lineHeight: 'leading-20px', // custom
  },
  'poppins-medium-16': {
    family: 'sans',
    weight: 'font-medium',
    size: 'text-base', // 16px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },

  // Poppins Semibold Variants
  'poppins-semibold-16': {
    family: 'sans',
    weight: 'font-semibold',
    size: 'text-base', // 16px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },
  'poppins-semibold-18': {
    family: 'sans',
    weight: 'font-semibold',
    size: 'text-lg', // 18px
    lineHeight: 'leading-tight', // 100%
    letterSpacing: 'tracking-normal', // 0%
  },
  'poppins-semibold-20': {
    family: 'sans',
    weight: 'font-semibold',
    size: 'text-2xl', // 20px
    lineHeight: 'leading-snug', // 120%
    letterSpacing: 'tracking-tight', // -1%
  },
};

const Typography = ({
  tag = 'p',
  variant = 'poppins-regular-16',
  align = 'left',
  color = 'text-gray-paragraph',
  className = '',
  children,
  ...props
}) => {
  // Mapping tag to HTML tag
  const Tag = tag;
  const variantConfig = VARIANTS[variant] || VARIANTS['poppins-regular-16'];

  const baseClasses = [
    variantConfig.family === 'sans' ? 'font-sans' : 'font-nunito',
    variantConfig.weight,
    variantConfig.size,
    variantConfig.lineHeight ? variantConfig.lineHeight : '',
    variantConfig.letterSpacing ? variantConfig.letterSpacing : '',
    align,
    color,
    className,
  ]
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <Tag className={baseClasses} {...props}>
      {children}
    </Tag>
  );
};

Typography.propTypes = {
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'label',
    'a',
  ]),
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
