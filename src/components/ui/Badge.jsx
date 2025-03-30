import React from 'react';

import PropTypes from 'prop-types';

import data from '@data';
import * as Icons from '@icons';
import { Icon, Typography } from '@ui';

const Badge = ({ label }) => {
  const { sectionIconKey } = data.sections;
  const icon = Icons[sectionIconKey];

  return (
    <div
      className="relative w-fit flex items-center rounded-[200px] h-7 gap-[7px] p-[11px] badge-border-gradient"
      style={{
        border: '1px solid transparent',
        background:
          'linear-gradient(white, white) padding-box, ' +
          'linear-gradient(109.89deg, #7F52FF 1.07%, #4C3199 100%) border-box',
      }}
    >
      <Icon IconComponent={icon} width="w-[13px]" />
      <Typography
        color="text-purple-primary"
        tag="span"
        variant="poppins-regular-14-relaxed"
      >
        {label}
      </Typography>
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Badge;
