import { prec } from "./precedence.js";

const toPostfixArray = (input, max) => {
    var stack = [];
    var postfix = [];
    var maxx = max;
    if (maxx > input.length || maxx < 0) {
      maxx = input.length;
    }

    for (var i = 0; i < maxx; i++) {
      let token = input[i];

      // Handle negative numbers for power operations
      if (token === "-" && (i === 0 || prec[input[i - 1]] || input[i - 1] === "(" || input[i - 1] === "{")) {
        // Combine '-' with the next token to form a negative number
        if (i + 1 < maxx && !isNaN(input[i + 1])) {
          token = token + input[i + 1]; // e.g., '-3'
          i++; // Skip the next token as it's now part of the current token
        }
      }

      if (prec[token]) {
        while (
          stack.length > 0 &&
          ((prec[token].associativity === "left" &&
            prec[token].precedence <= prec[stack[stack.length - 1]].precedence) ||
            (prec[token].associativity === "right" &&
              prec[token].precedence < prec[stack[stack.length - 1]].precedence))
        ) {
          postfix.push(stack.pop());
        }
        stack.push(token);
      } else if (token === "(" || token === "{") {
        stack.push(token);
      } else if (token === ")" || token === "}") {
        while (
          stack.length > 0 &&
          stack[stack.length - 1] !== "(" &&
          stack[stack.length - 1] !== "{"
        ) {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        postfix.push(token);
      }
    }

    while (stack.length > 0) {
      postfix.push(stack.pop());
    }

    return postfix;
  }

  export { toPostfixArray };
