import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    let frameRef;
    if (isVisible && count < target) {
      frameRef = requestAnimationFrame(() => setCount((prev) => prev + 1));
    }

    return () => cancelAnimationFrame(frameRef);
  }, [isVisible, count, target]);
  return <span ref={ref}>{count}</span>;
};

Counter.propTypes = {
  target: PropTypes.number.isRequired,
};

export default Counter;
