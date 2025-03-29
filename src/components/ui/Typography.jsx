import React from 'react';

import PropTypes from 'prop-types';

const VARIANTS = {
  // Nunito Bold Variants
  'nunito-bold-19': {
    family: 'nunito',
    weight: 'bold',
    size: 'xl', // 19.2px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },
  'nunito-bold-40': {
    family: 'nunito',
    weight: 'bold',
    size: '3xl', // 40px
    lineHeight: 'snug', // 120%
    letterSpacing: 'tight', // -1%
  },
  'nunito-bold-40-alt': {
    family: 'nunito',
    weight: 'bold',
    size: '3xl', // 40px
    lineHeight: 'normal', // 130%
    letterSpacing: 'normal', // 0%
  },
  'nunito-bold-48': {
    family: 'nunito',
    weight: 'bold',
    size: '4xl', // 48px
    lineHeight: 'normal', // 130%
  },
  'nunito-bold-76': {
    family: 'nunito',
    weight: 'bold',
    size: '5xl', // 76px
    lineHeight: 'normal', // 130%
    letterSpacing: 'normal', // 0%
  },

  // Poppins Regular Variants
  'poppins-regular-16': {
    family: 'sans',
    weight: 'normal',
    size: 'base', // 16px
  },
  'poppins-regular-14': {
    family: 'sans',
    weight: 'normal',
    size: 'xs', // 14px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },
  'poppins-regular-14-wide': {
    family: 'sans',
    weight: 'normal',
    size: 'xs', // 14px
    lineHeight: 'tight', // 100%
    letterSpacing: 'wide', // 1%
  },
  'poppins-regular-14-relaxed': {
    family: 'sans',
    weight: 'normal',
    size: 'xs', // 14px
    lineHeight: 'relaxed', // 150%
    letterSpacing: 'normal', // 0%
  },
  'poppins-regular-14.4': {
    family: 'sans',
    weight: 'normal',
    size: 'sm', // 14.4px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },

  // Poppins Medium Variants
  'poppins-medium-14': {
    family: 'sans',
    weight: 'medium',
    size: 'xs', // 14px
    lineHeight: '20px', // custom
  },
  'poppins-medium-16': {
    family: 'sans',
    weight: 'medium',
    size: 'base', // 16px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },

  // Poppins Semibold Variants
  'poppins-semibold-16': {
    family: 'sans',
    weight: 'semibold',
    size: 'base', // 16px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },
  'poppins-semibold-18': {
    family: 'sans',
    weight: 'semibold',
    size: 'lg', // 18px
    lineHeight: 'tight', // 100%
    letterSpacing: 'normal', // 0%
  },
  'poppins-semibold-20': {
    family: 'sans',
    weight: 'semibold',
    size: '2xl', // 20px
    lineHeight: 'snug', // 120%
    letterSpacing: 'tight', // -1%
  },
};

const Typography = ({
  tag = 'p',
  variant = 'poppins-regular-16',
  align = 'left',
  color = 'gray-paragraph',
  className = '',
  children,
  ...props
}) => {
  // Mapping tag to HTML tag
  const Tag = tag;
  const variantConfig = VARIANTS[variant] || VARIANTS['poppins-regular-16'];

  const baseClasses = [
    variantConfig.family === 'sans' ? 'font-sans' : 'font-nunito',
    `font-${variantConfig.weight}`,
    `text-${variantConfig.size}`,
    variantConfig.lineHeight ? `leading-${variantConfig.lineHeight}` : '',
    variantConfig.letterSpacing
      ? `tracking-${variantConfig.letterSpacing}`
      : '',
    `text-${align}`,
    `text-${color}`,
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
