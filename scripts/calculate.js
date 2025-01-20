//helper functions:
const fact = (number) => {
  if (number == 0) return 1;
  else return fact(number - 1) * number;
};

//operators maps to evaluate postfix
const binaryOperations = {
  "+": (number1, number2) => number1 + number2,
  "-": (number1, number2) => number1 - number2,
  "*": (number1, number2) => number1 * number2,
  "÷": (number1, number2) => number1 / number2,
  "%": (number1, number2) => number1 % number2,
  "^": (number1, number2) => number1 ** number2,
};

const unaryOperations = {
  "sin": (number) => Math.sin(number),
  "cos": (number) => Math.cos(number),
  "tan": (number) => Math.tan(number),
  "e": (number) => Math.exp(number),
  "log": (number) => Math.log(number),
  "log10": (number) => Math.log10(number),
  "√": (number) => Math.sqrt(number),
  "!": (number) => fact(number),
};

const binaryCalculate = (number1, number2, operand) => {
  try {
    if (typeof number1 === "number" && typeof number2 === "number") {
      return binaryOperations[operand](number1, number2);
    } else {
      throw "Enter a valid Number";
    }
  } catch (error) {
    console.log(error);
  }
};

const unaryCalculate = (number, operand) => {
  return unaryOperations[operand](number);
};

console.log(unaryOperations["log10"](100));

export { unaryCalculate, binaryCalculate };
