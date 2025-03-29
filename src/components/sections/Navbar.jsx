import React from 'react';

import data from '@data';
import * as Icons from '@icons';
import { Button, Icon, SectionWrapper, Typography } from '@ui';

const Navbar = () => {
  const { navbar } = data.sections;
  const logo = Icons[navbar.logoImgKey];

  return (
    <SectionWrapper
      className="flex justify-between items-center py-4"
      tag="nav"
    >
      <Icon IconComponent={logo} width="w-[135.85px]" />
      <ul className="flex gap-[60px]">
        {navbar.navLinks.map((navItem) => (
          <li key={navItem.id}>
            <Typography className="py-2 px-[14px]" href="#" tag="a">
              {navItem.label}
            </Typography>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {navbar.buttonGroup.map((button) => (
          <Button
            key={button.id}
            label={button.label}
            size={button.size}
            variant={button.variant}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Navbar;
