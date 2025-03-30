import React from 'react';

import data from '@data';
import * as Images from '@images';
import { Badge, Image, SectionWrapper, Typography } from '@ui';

const LiveDemo = () => {
  const { main } = data.sections.liveDemo;
  const heroImage = Images[main.heroImageKey];

  return (
    <div className="py-[113px] bg-purple-sky">
      <SectionWrapper className="h-[689px] bg-white rounded-3xl shadow-lg flex gap-[45px]">
        <div className="max-w-[558px] my-[49px] ml-10">
          <Badge className="mx-auto block" label={main.name} />
          <Typography
            className="mt-3"
            color="text-black"
            tag="h1"
            variant="nunito-bold-48"
          >
            {main.heading}
            <Typography
              color="text-gradient text-gradient-purple"
              tag="span"
              variant="nunito-bold-48"
            >
              {' '}
              {main.highlighted}
            </Typography>
          </Typography>
          <Typography className="mt-4">
            Masukkan URL, ubah jadi video dalam hitungan detik.
            <br /> Mudah dan gratis!
          </Typography>
        </div>
        <div className="flex-grow bg-subtract-main bg-no-repeat bg-right-top">
          <Image objectFit="fill" src={heroImage} />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LiveDemo;
