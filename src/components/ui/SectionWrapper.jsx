import React from 'react';

import PropTypes from 'prop-types';

const SectionWrapper = ({ tag = 'section', children }) => {
  // Mapping Tag to HTML tag
  const Tag = tag;

  return <Tag>{children}</Tag>;
};

SectionWrapper.propTypes = {
  tag: PropTypes.oneOf(['div', 'header', 'section', 'footer']),
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
