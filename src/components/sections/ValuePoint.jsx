import React from 'react';

import data from '@data';
import * as Icons from '@icons';
import * as Images from '@images';
import { Button, Card, Image, SectionWrapper, Typography } from '@ui';

const ValuePoint = () => {
  const { valuePoint } = data.sections;
  const buttonIcon = Icons[valuePoint.button.iconKey];
  const partnertItems = valuePoint.partnertItems;

  return (
    <SectionWrapper className="grid grid-cols-1 gap-[100px] pt-[37px] pb-[25px]">
      {/* Main card */}
      <div className="grid grid-cols-1 gap-[60px] py-10 border border-stroke rounded-3xl shadow-shadow-2xl">
        <div className="grid grid-cols-1 gap-10">
          <div>
            <Typography
              align="text-center"
              className="mb-4"
              color="text-black"
              tag="h1"
              variant="nunito-bold-40"
            >
              {valuePoint.heading}
            </Typography>
            <Typography align="text-center" className="mt-4">
              {valuePoint.description}
            </Typography>
          </div>
          <div className="flex justify-center">
            <Button
              icon={buttonIcon}
              label={valuePoint.button.label}
              size="large"
              variant="gradient"
            />
          </div>
        </div>

        {/* Numbers */}
        <div className="px-8 flex justify-between">
          {valuePoint?.valueItems.map((value, index) => (
            <div key={value.id}>
              <Card
                value={value.point}
                valueLabel={value.description}
                variant="value"
              />
              {index < valuePoint.valueItems.length - 1 && (
                <div className="border-r border-disabled-label"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Supported platform */}
      <div className="flex items-center">
        <div className="h-full flex items-center">
          <Typography className="w-[268.5px]" variant="poppins-normal-16">
            {valuePoint?.partnertsText}
          </Typography>
        </div>
        {/* <div className="w-full h-[67px] relative flex gap-16 flex-grow">
          

          {valuePoint?.partnertItems.map((partner) => (
            <Image key={partner.id} src={Images[partner.imageKey]} />
          ))}
        </div> */}
        <div className="relative flex items-center">
          <div className="absolute w-[138.42px] h-[67px] bg-white-fade left-0 z-10 my-auto"></div>
          <div className="absolute w-[188px] h-[67px] bg-white-fade-alt right-0 z-10 my-auto"></div>
          <div className="overflow-hidden pt-[18px] pb-[7px]">
            <div className="flex h-[42px] animate-[slide_35s_linear_infinite] gap-16 flex-grow">
              {[...partnertItems, ...partnertItems].map((logo, index) => (
                <Image
                  key={index}
                  alt={`logo-${logo.imageKey}`}
                  objectFit="object-fill"
                  src={Images[logo.imageKey]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValuePoint;
