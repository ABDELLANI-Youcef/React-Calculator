import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const nums = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (nums.includes(buttonName)) {
    next = next === null ? buttonName : next + buttonName;
  } else {
    switch (buttonName) {
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;

      case '+/-':

        if (total !== null) {
          total = operate(total, '-1', 'X');
        }

        if (next !== null) {
          next = operate(next, '-1', 'X');
        }
        break;

      case '=':
        if (next === '0' && operation === '÷') {
          total = 'ERROR, DIVISION BY ZERO';
        } else if (total === null && operation === null) {
          total = next;
        } else {
          total = operate(total, next, operation);
        }
        next = null;
        operation = null;
        break;

      default:
        if (next === '0' && operation === '÷') {
          total = 'ERROR, DIVISION BY ZERO';
          next = null;
          operation = null;
        } else if ((operation === null || operation === 'X' || operation === '÷') && buttonName === '-' && next === null) {
          next = buttonName;
        } else {
          if (operation !== null) {
            total = operate(total, next, operation);
          } else if (next !== null) {
            total = next;
          }
          operation = buttonName;
          next = null;
        }
        break;
    }
  }
  return { total, next, operation };
};

export default calculate;
