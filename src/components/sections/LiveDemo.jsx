import React, { useEffect, useState } from 'react';

import { useFormValidation } from '@hooks/useFormValidation';

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
  // Dinamically display live demo content
  const [stage, setStage] = useState('main');
  // Select option state
  const [selectedOption, setSelectedOption] = useState('');
  // Show user form
  const [isFormShow, setIsFormShow] = useState(false);
  // Demo button loading state
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  // Get main and result sections json data
  const { main } = data.sections.liveDemo;
  const { result } = data.sections.liveDemo;

  // Get image for hero section and result section stage
  const heroImage = Images[main.heroImageKey];
  const resultImage = Images[result.resultImageKey];

  // Get inputs json data
  const selectUrlForm = main.selectUrlForm.input;
  const userFormInputs = main.userForm.inputs;

  // Validation Function
  const validate = (values) => {
    const errors = {};

    // Name validation
    if (!values.name.trim()) {
      errors.name = 'Nama harus diisi';
    } else if (values.name.length < 3) {
      errors.name = 'Nama minimal 3 karakter';
    }

    // Email validation
    if (!values.email) {
      errors.email = 'Email harus diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Email tidak valid';
    }

    // Phone validation
    if (!values.phone) {
      errors.phone = 'Nomor telepon harus diisi';
    } else if (!/^[0-9]{10,13}$/.test(values.phone)) {
      errors.phone = 'Nomor telepon harus 10-13 digit angka';
    }

    // Checkbox validation
    if (!values.agree) {
      errors.agree = 'Anda harus menyetujui persyaratan';
    }

    return errors;
  };

  // Form handling custom hooks
  const {
    values,
    errors,
    isSubmitting,
    resetForm,
    handleChange,
    handleSubmit,
  } = useFormValidation(
    {
      name: '',
      email: '',
      phone: '',
      agree: false,
    },
    validate
  );

  // Form submission function
  const onSubmit = () => {
    setStage('loading');
  };

  // Demo button click handler function
  const handleDemoClick = () => {
    setIsDemoLoading(true);

    setTimeout(() => {
      resetForm();
      setIsDemoLoading(false);
      setIsFormShow(false);
      setSelectedOption('');
      setStage('main');
    }, 1500);
  };

  const variants = {
    // Main stage content
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
            // User form
            <form
              className="mt-[60px] grid grid-cols-1 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                error={errors[userFormInputs[0].name]}
                input={userFormInputs[0]}
                value={values[userFormInputs[0].name]}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-6">
                {userFormInputs?.slice(1, 3).map((input) => (
                  <Input
                    key={input.id}
                    error={errors[input.name]}
                    input={input}
                    value={values[input.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <Input
                error={errors[userFormInputs[3].name]}
                input={userFormInputs[3]}
                value={values[userFormInputs[3].name]}
                onChange={handleChange}
              />

              <Button
                className="w-[180px] px-4 py-3"
                disabled={isSubmitting}
                label={main.userForm.buttonLabel}
                type="submit"
              />
            </form>
          ) : (
            // Select URL Demo
            <div className="w-full mt-24 flex gap-3">
              <Select
                optionItems={selectUrlForm.options}
                placeholder={selectUrlForm.placeholder}
                prefixIcon={selectUrlForm.prefixIconKey}
                selectedOption={selectedOption}
                suffixIcon={selectUrlForm.suffixIconKey}
                onSelectOption={setSelectedOption}
              />
              <Button
                disabled={selectedOption === ''}
                label="Analisa"
                size="medium"
                variant="primary"
                onClick={() => setIsFormShow(true)}
              />
            </div>
          )}
        </div>

        {/* Hero image section */}
        <div className="flex-grow lg:bg-subtract-main lg:bg-no-repeat lg:bg-right-top">
          <Image
            alt="Videfly AI Power Video"
            objectFit="fill"
            src={heroImage}
          />
        </div>
      </SectionWrapper>
    ),

    // Loading stage content
    loading: (
      <SectionWrapper className="min-h-[689px] bg-white rounded-3xl shadow-lg flex justify-center items-center">
        <Loading className="animate-spin text-purple-secondary" />
      </SectionWrapper>
    ),

    // Result stage content
    result: (
      <SectionWrapper className="min-h-[689px] bg-white bg-subtract-result bg-no-repeat bg-bottom rounded-3xl shadow-lg flex flex-col items-center gap-10 pt-8 pb-[21px] px-10">
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

          {/* Demo button group */}
          <div className="flex gap-4 mt-6">
            {result?.buttonGroup.map((button) => (
              <Button
                key={button.id}
                className="font-medium"
                isCustom={button.isCustom}
                isLoading={button.id === 2 ? isDemoLoading : false}
                label={button.label}
                variant={button.variant}
                onClick={button.id === 2 ? () => handleDemoClick() : () => {}}
              />
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="h-[404px]">
          <Image
            alt={result.heading}
            objectFit="object-fill"
            src={resultImage}
          />
        </div>
      </SectionWrapper>
    ),
  };

  useEffect(() => {
    if (stage === 'loading') {
      setTimeout(() => {
        setStage('result');
      }, 1500);
    }
  }, [stage]);

  return (
    <div className="py-[113px] px-2 lg:px-0 bg-purple-sky">
      {/* Render live demo content */}
      {variants[stage]}
    </div>
  );
};

export default LiveDemo;
