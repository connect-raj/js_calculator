import { unaryCalculate, binaryCalculate } from "./calculate.js";
var binaryOperators = ["/", "*", "-", "+", "%", "^"];
var unaryOperators = ["sin", "cos", "tan", "exp"]

const evalPostfix = (postfixArray) => {
    var stack = [];
    let result = 0;

    for (var i = 0; i < postfixArray.length; i++) {
        if (!binaryOperators.includes(postfixArray[i])) {
            if (!unaryOperators.includes(postfixArray[i])) {
                stack.push(Number(postfixArray[i]));
            } else {
                result = unaryCalculate(stack[stack.length - 1], postfixArray[i]);
                stack.pop();
                stack.push(result);
                // console.log(stack);
            }
        } else {
            console.log(stack);
            result = binaryCalculate(Number(stack[stack.length - 2]), Number(stack[stack.length - 1]), postfixArray[i]);
            console.log(result);
            stack.pop();
            stack.pop();
            stack.push(result);
            // console.log(stack);
        }
    }

    //   console.log(stack[stack.length - 1]);
};

export { evalPostfix };
