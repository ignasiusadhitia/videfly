import React from 'react';

import PropTypes from 'prop-types';

const Icon = ({
  IconComponent,
  className,
  width = 'w-9',
  height = 'h-9',
  color = '',
  groupHoverColor = '',
  onClick,
}) => {
  const combinedClasses = `${className} ${width} ${height} ${color} ${groupHoverColor} transition-colors duration-500 ease-in-out
`;

  return <IconComponent className={combinedClasses} onClick={onClick} />;
};

Icon.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  groupHoverColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
