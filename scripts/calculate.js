const binaryOperations = {
  "+": (number1, number2) => number1 + number2,
  "-": (number1, number2) => number1 - number2,
  "*": (number1, number2) => number1 * number2,
  "/": (number1, number2) => number1 / number2,
  "%": (number1, number2) => number1 % number2,
};

const unaryOperations = {
  "sin": (number) => Math.sin(number),
  "cos": (number) => Math.cos(number),
  "tan": (number) => Math.tan(number),
  "e" : (number) => Math.exp(number),
};

const binaryCalculate = (number1, number2, operand) => {
    try {
        if (typeof(number1) === "number" && typeof(number2) === "number") {
            return binaryOperations[operand](number1, number2);
        }
        else{
            throw "Enter a valid Number"
        }
    } catch (error) {
        console.log(error);
    }
};

const unaryCalculate = (number, operand) => {
    return unaryOperations[operand](number);
}

export { unaryCalculate, binaryCalculate };
