import { calculate } from "./calculate.js";
var operators = ["/", "*", "-", "+", "%", "^"];

const evalPostfix = (postfixArray) => {
  var stack = [];
  console.log(postfixArray);

  for (var i = 0; i < postfixArray.length; i++) {
    if (!operators.includes(postfixArray[i])) {
      stack.push(Number(postfixArray[i]));
    } else {
      let result = 0;
      if (stack[stack.length - 1] == "number") {
        if (stack[stack.length - 2] == "number") {
          result = calculate(
            stack[stack.length - 2],
            stack[stack.length - 1],
            postfixArray[i]
          );
        } else {
          result = calculate(
            stack[stack.length - 1],
            stack[stack.length - 2],
          );
        }
      }
      stack.pop();
      stack.pop();
      stack.push(result);
    }
  }

  console.log(stack[stack.length - 1]);
};

export { evalPostfix };
