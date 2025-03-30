import React, { useState } from 'react';

import data from '@data';
import * as Images from '@images';
import { Badge, Card, Image, SectionWrapper, Typography } from '@ui';

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState({
    id: 1,
    imgKey: 'step1',
  });

  const { tutorial } = data.sections;

  return (
    <SectionWrapper className="grid grid-cols-1 gap-20 pt-[31px] pb-[42px]">
      <div className="flex flex-col items-center">
        <Badge label={tutorial.name} />
        <Typography
          align="text-center"
          className="mt-[33.5px]"
          color="text-black"
          tag="h2"
          variant="nunito-bold-40"
        >
          {tutorial.heading}
          <br />
          <Typography
            align="text-center"
            className="mt-4"
            color="text-gradient text-gradient-purple"
            tag="span"
            variant="nunito-bold-40"
          >
            {tutorial.highlighted}
          </Typography>
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px]">
        <div className="p-[60px] rounded-3xl border border-disabled-button bg-offWhite">
          <Image
            alt={`tutorial-step-${currentStep.id}`}
            objectFit="object-fill"
            src={Images[currentStep.imgKey]}
          />
        </div>
        <div className="grid grid-cols-1 gap-[35px] py-[26px]">
          {tutorial?.stepItems.map((step) => (
            <Card
              key={step.id}
              bodyText={step.description}
              headingText={step.title}
              isSelected={currentStep.id === step.id}
              variant="step"
              onClick={
                () => setCurrentStep({ id: step.id, imgKey: step.imgKey })
                // disabled-eslint-next-line
              }
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Tutorial;
