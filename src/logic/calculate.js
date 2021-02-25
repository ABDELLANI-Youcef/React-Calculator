import operate from "./operate";

const calculate = (calculator, buttonName) => {
  switch (buttonName) {
    case "+/-":
      calculator.total *= -1;
      calculator.next *= -1;
      break;

    case "AC":
      calculator.total = 0;
      calculator.next = 0;
      break;

    default:
      calculator.total = operate(calculator.total, calculator.next, buttonName);
      break;
  }
  return calculator
}

export default calculate;