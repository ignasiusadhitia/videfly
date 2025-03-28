import React from 'react';

import PropTypes from 'prop-types';

const Typography = ({ tag = 'p', children }) => {
  // Mapping tag to HTML tag
  const Tag = tag;

  return <Tag>{children}</Tag>;
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
  ]),
  children: PropTypes.node.isRequired,
};

export default Typography;
