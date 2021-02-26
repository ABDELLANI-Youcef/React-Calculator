import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next } = calculator;
  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;

    case 'AC':
      total = 0;
      next = 0;
      break;

    case '=':
      next = total;
      break;

    default:
      total = operate(total, next, buttonName);
      break;
  }
  return { total, next };
};

export default calculate;
