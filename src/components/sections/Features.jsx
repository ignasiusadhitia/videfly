import React from 'react';

import data from '@data';
import * as Icons from '@icons';
import * as Images from '@images';
import { Badge, Card, SectionWrapper, Typography } from '@ui';

const Features = () => {
  const { features } = data.sections;
  return (
    <SectionWrapper className="grid grid-cols-1 gap-20 pt-[31px] pb-[60px]">
      <div className="flex flex-col items-center">
        <Badge label={features.name} />
        <Typography
          align="text-center"
          className="mt-[33.5px]"
          color="text-black"
          tag="h1"
          variant="nunito-bold-40"
        >
          {features.heading}{' '}
          <Typography
            align="text-center"
            className="mt-4"
            color="text-gradient text-gradient-purple"
            tag="span"
            variant="nunito-bold-40"
          >
            {features.highlighted}
          </Typography>
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-3 gap-3">
          {features?.featureItems.slice(0, 3).map((feature) => (
            <Card
              key={feature.id}
              bodyText={feature.description}
              headingText={feature.title}
              icon={Icons[feature.iconKey]}
              imageAlt={feature.title}
              imageSource={Images[feature.imgKey]}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {features?.featureItems.slice(3, 5).map((feature) => (
            <Card
              key={feature.id}
              bodyText={feature.description}
              headingText={feature.title}
              icon={Icons[feature.iconKey]}
              imageAlt={feature.title}
              imageSource={Images[feature.imgKey]}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
