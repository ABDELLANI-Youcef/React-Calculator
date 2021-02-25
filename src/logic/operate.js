import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const first = new Big(numberOne);
  switch (operation) {
    case "+":
      return first.plus(numberTwo);
    case "-":
      return first.minus(numberTwo);

    case "X":
      return first.times(numberTwo);

    case "X":
      return first.times(numberTwo);

    case "÷":
      return first.div(numberTwo);

    default:
      return first.div(numberTwo).times(100);
  }
}

export default operate;