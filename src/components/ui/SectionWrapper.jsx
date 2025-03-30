import React from 'react';

import PropTypes from 'prop-types';

const SectionWrapper = ({ tag = 'section', className, children }) => {
  // Mapping Tag to HTML tag
  const Tag = tag;

  // Wrap each section
  return <Tag className={`${className} container`}>{children}</Tag>;
};

SectionWrapper.propTypes = {
  tag: PropTypes.oneOf(['div', 'nav', 'header', 'section', 'footer']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
