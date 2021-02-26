import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = new Big(numberOne);
  const second = new Big(numberTwo);
  switch (operation) {
    case '+':
      return first.plus(second).toString();

    case '-':
      return first.minus(second).toString();

    case 'X':
      return first.times(second).toString();

    case '÷':
      return first.div(second).toString();

    default:
      return first.div(100).times(second).toString();
  }
};

export default operate;
