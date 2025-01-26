import { unaryCalculate, binaryCalculate } from "./calculate.js";
var binaryOperators = ["÷", "*", "-", "+", "%", "^"];
var unaryOperators = [
  "sin",
  "arcsin",
  "cos",
  "arccos",
  "tan",
  "arctan",
  "e",
  "log",
  "log10",
  "!",
  "√",
  "π",
];

const evalPostfix = (postfixArray) => {
  var stack = [];
  let result = 0;

  for (var i = 0; i < postfixArray.length; i++) {
    console.log(stack);
    if (!binaryOperators.includes(postfixArray[i])) {
      if (!unaryOperators.includes(postfixArray[i])) {
        stack.push(Number(postfixArray[i]));
      } else {
        result = unaryCalculate(stack[stack.length - 1], postfixArray[i]);
        if (postfixArray[i] == "e" || postfixArray[i] == "π") {
          stack.push(result);
          continue;
        }
        stack.pop();
        stack.push(result);
      }
    } else {
      console.log(stack);
      if (stack.length == 1 && i == postfixArray.length - 1)
        return stack[stack.length - 1];
      else {
        result = binaryCalculate(
          stack[stack.length - 2],
          stack[stack.length - 1],
          postfixArray[i]
        );
        stack.pop();
        stack.pop();
        stack.push(result);
      }
    }
  }
  if (stack.length == 1) return stack[stack.length - 1];
};

export { evalPostfix };
