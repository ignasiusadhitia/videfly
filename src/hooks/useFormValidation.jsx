import React, { useState } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setvalues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setvalues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      callback(values);
    }
  };
  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useFormValidation;
