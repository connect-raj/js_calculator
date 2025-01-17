import { prec } from "./precedence.js";

function toPostfixArray(input, max) {
  var stack = [];
  var postfix = [];
  var maxx = max;
  if (maxx > input.length || maxx < 0) {
    maxx = input.length;
  }
  for (var i = 0; i < maxx; i++) {
    if (prec[input[i]]) {
      if (stack.length == 0) {
        stack.push(input[i]);
      } else if (input[i] == "0-") {
        stack.push(input[i]);
      } else if (prec[stack[stack.length - 1]] < prec[input[i]]) {
        stack.push(input[i]);
      } else if (stack[stack.length - 1] == "^" && input[i] == "^") {
        stack.push(input[i]);
      } else {
        while (
          stack.length > 0 &&
          prec[stack[stack.length - 1]] >= prec[input[i]]
        ) {
          if (stack[stack.length - 1] == "^" && input[i] == "^") {
            break;
          }
          var last = stack[stack.length - 1];
          if (last == "0-" && isNumber(postfix[postfix.length - 1])) {
            postfix[postfix.length - 1] = "-" + postfix[postfix.length - 1];
          } else {
            postfix.push(last);
          }
          stack.pop();
        }
        stack.push(input[i]);
      }
    } else if (input[i] == "(" || input[i] == "{") {
      stack.push(input[i]);
    } else if (input[i] == ")") {
      while (stack.length > 0 && stack[stack.length - 1] != "(") {
        var last = stack[stack.length - 1];
        if (last == "0-" && isNumber(postfix[postfix.length - 1])) {
          postfix[postfix.length - 1] = "-" + postfix[postfix.length - 1];
        } else {
          postfix.push(last);
        }
        stack.pop();
      }
      stack.pop();
    } else if (input[i] == "}") {
      while (stack.length > 0 && stack[stack.length - 1] != "{") {
        var last = stack[stack.length - 1];
        if (last == "0-" && isNumber(postfix[postfix.length - 1])) {
          postfix[postfix.length - 1] = "-" + postfix[postfix.length - 1];
        } else {
          postfix.push(last);
        }
        stack.pop();
      }
      stack.pop();
    } else {
      postfix.push(input[i]);
    }
  }
  if (max == -1) {
    while (stack.length > 0) {
      var last = stack[stack.length - 1];
      if (last == "0-" && isNumber(postfix[postfix.length - 1])) {
        postfix[postfix.length - 1] = "-" + postfix[postfix.length - 1];
      } else {
        postfix.push(last);
      }
      stack.pop();
    }
    return postfix;
  }
  return { postfix: postfix, stack: stack };
}

export { toPostfixArray };
