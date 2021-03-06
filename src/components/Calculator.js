import React, { useState } from 'react';
import Display from './Display';
import Buttonspanel from './ButtonsPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

const Calculator = () => {
  const [calculator, setCalculator] = useState({ total: null, next: null, operation: null });
  const handleClick = buttonName => {
    setCalculator(calculate(calculator, buttonName));
  };

  const { next, total } = calculator;
  let result;
  if (next !== null) {
    result = next;
  } else if (total !== null) {
    result = total;
  } else {
    result = '0';
  }

  return (
    <>
      <Navbar />
      <Display result={result} />
      <Buttonspanel clickHandler={handleClick} />
    </>
  );
};

export default Calculator;
