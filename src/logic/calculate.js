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
        total = operate(total, '-1', 'X');
        next = operate(next, '-1', 'X');
        break;

      case '=':
        total = operate(total, next, operation);
        next = null;
        break;

      default:
        if (operation !== null) {
          total = operate(total, next, operation);
        } else if (next !== null) {
          total = next;
        }
        operation = buttonName;
        next = null;
        break;
    }
  }
  return { total, next, operation };
};

export default calculate;
