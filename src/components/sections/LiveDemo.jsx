import React, { useEffect, useState } from 'react';

import data from '@data';
import { Loading } from '@icons';
import * as Images from '@images';
import {
  Badge,
  Button,
  Image,
  Input,
  SectionWrapper,
  Select,
  Typography,
} from '@ui';

const LiveDemo = () => {
  const [stage, setStage] = useState('main');
  const [isFormShow, setIsFormShow] = useState(false);

  const { main } = data.sections.liveDemo;
  const { result } = data.sections.liveDemo;

  const heroImage = Images[main.heroImageKey];
  const resultImage = Images[result.resultImageKey];
  const selectUrlForm = main.selectUrlForm.input;
  const userFormInputs = main.userForm.inputs;

  const variants = {
    main: (
      <SectionWrapper className="min-h-[689px] bg-white rounded-3xl shadow-lg flex flex-wrap gap-[45px]">
        <div className="max-w-[558px] my-[49px] ml-0 lg:ml-10">
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
          <Typography className="mt-4">{main.description}</Typography>

          {isFormShow ? (
            <form className="mt-[60px] grid grid-cols-1 gap-6">
              <Input input={userFormInputs[0]} />
              <div className="grid grid-cols-2 gap-6">
                {userFormInputs?.slice(1, 3).map((input) => (
                  <Input key={input.id} input={input} />
                ))}
              </div>
              <Input input={userFormInputs[3]} />

              <Button
                className="w-[180px] px-4 py-3"
                label={main.userForm.buttonLabel}
                onClick={() => setStage('loading')}
              />
            </form>
          ) : (
            <div className="w-full mt-24 flex gap-3">
              <Select
                optionItems={selectUrlForm.options}
                placeholder={selectUrlForm.placeholder}
                prefixIcon={selectUrlForm.prefixIconKey}
                suffixIcon={selectUrlForm.suffixIconKey}
              />
              <Button
                label="Analisa"
                size="medium"
                variant="primary"
                onClick={() => setIsFormShow(true)}
              />
            </div>
          )}
        </div>
        <div className="flex-grow lg:bg-subtract-main lg:bg-no-repeat lg:bg-right-top">
          <Image
            alt="Videfly AI Power Video"
            objectFit="fill"
            src={heroImage}
          />
        </div>
      </SectionWrapper>
    ),
    loading: (
      <SectionWrapper className="min-h-[689px] bg-white rounded-3xl shadow-lg flex justify-center items-center">
        <Loading className="animate-spin" />
      </SectionWrapper>
    ),
    result: (
      <SectionWrapper className="min-h-[689px] bg-white bg-subtract-result bg-no-repeat bg-bottom rounded-3xl shadow-lg flex flex-col items-center gap-10 pt-8 px-10">
        <div className="max-w-[698px] flex flex-col items-center">
          <Typography
            align="text-center"
            className="mt-3"
            color="text-black"
            tag="h1"
            variant="nunito-bold-48"
          >
            {result.heading}
          </Typography>
          <Typography align="text-center" className="mt-2">
            {result.description}
          </Typography>

          <div className="flex gap-4 mt-6">
            {result?.buttonGroup.map((button) => (
              <Button
                key={button.id}
                className="font-medium"
                isCustom={button.isCustom}
                label={button.label}
                variant={button.variant}
              />
            ))}
          </div>
        </div>
        <Image
          alt={result.heading}
          imageHeight="w-[614px] h-[404px]"
          src={resultImage}
        />
      </SectionWrapper>
    ),
  };

  useEffect(() => {
    if (stage === 'loading') {
      setTimeout(() => {
        setStage('result');
      }, 3000);
    }
  }, [stage]);

  return (
    <div className="py-[113px] px-2 lg:px-0 bg-purple-sky">
      {variants[stage]}
    </div>
  );
};

export default LiveDemo;
