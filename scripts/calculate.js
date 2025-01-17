const operations = {
  "+": (number1, number2) => number1 + number2,
  "-": (number1, number2) => number1 - number2,
  "*": (number1, number2) => number1 * number2,
  "/": (number1, number2) => number1 / number2,
  "%": (number1, number2) => number1 % number2,
};

const unaryOperations = {
  "sin": (number) => Math.sin(number),
};

const calculate = (number1, number2, operand) => {
  if (typeof(number2) == "string") {
    return unaryOperations[number2](number1);
  }
  if (operations[operand]) {
    return operations[operand](number1, number2);
  } else {
    console.log("Invalid Operand");
  }
};

export { calculate };
