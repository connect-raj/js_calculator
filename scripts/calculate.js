class Calculator {
  // Static Methods
  // Static Methods for Binary Operations
  static add(number1, number2) {
    return number1 + number2;
  }

  static subtract(number1, number2) {
    return number1 - number2;
  }

  static multiply(number1, number2) {
    return number1 * number2;
  }

  static divide(number1, number2) {
    try {
      if (number2 == 0) {
        throw Error("Division by zero not Possible");
      } else {
        return number1 / number2;
      }
    } catch (error) {
      alert(error);
      return error;
    }
  }

  static remainder(number1, number2) {
    return number1 % number2;
  }

  static pow(number1, number2) {
    return number1 ** number2;
  }

  // Static method for unary operations
  static sin(number) {
    return Math.sin(number);
  }

  static cos(number) {
    return Math.cos(number);
  }

  static tan(number) {
    return Math.tan(number);
  }

  static log(number) {
    return Math.log(number);
  }

  static log10(number) {
    return Math.log10(number);
  }

  static e() {
    return Math.E;
  }

  static sqrt(number) {
    return Math.sqrt(number);
  }

  static PI() {
    return Math.PI;
  }
}
function fact(number) {
  if (number == 0) return 1;
  else return number * fact(number - 1);
}

//operators maps to evaluate postfix
const binaryOperations = {
  "+": (number1, number2) => Calculator.add(number1, number2),
  "-": (number1, number2) => Calculator.subtract(number1, number2),
  "*": (number1, number2) => Calculator.multiply(number1, number2),
  "÷": (number1, number2) => Calculator.divide(number1, number2),
  "%": (number1, number2) => Calculator.remainder(number1, number2),
  "^": (number1, number2) => Calculator.pow(number1, number2),
};

const unaryOperations = {
  sin: (number) => Calculator.sin(number),
  cos: (number) => Calculator.cos(number),
  tan: (number) => Calculator.tan(number),
  e: () => Calculator.e(),
  log: (number) => Calculator.log(number),
  log10: (number) => Calculator.log10(number),
  "√": (number) => Calculator.sqrt(number),
  "!": (number) => fact(number),
  π: () => Calculator.PI(),
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
