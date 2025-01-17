import { prec } from "./precedence.js";

const toInfixArray = (input) => {
  var arr = [];
  var str = "";
  for (var i = 0; i < input.length; i++) {
    if ("+*/()^%,{}".indexOf(input[i]) > -1) {
      if (str.length > 0) {
        arr.push(str);
      }
      arr.push(input[i]);
      str = "";
    } else if (input[i] == "-") {
      if (str.length > 0) {
        arr.push(str);
      }
      if (i == 0) {
        arr.push("0-");
      } else if (arr.length > 0 && prec[arr[arr.length - 1]] > 0) {
        arr.push("0-");
      } else {
        arr.push(input[i]);
      }
      str = "";
    } else if ("!=<>".indexOf(input[i]) > -1) {
      if (i + 1 < input.length && input[i + 1] == "=") {
        if (str.length > 0) {
          arr.push(str);
        }
        arr.push(input[i] + input[i + 1]);
        i++;
      } else {
        if (str.length > 0) {
          arr.push(str);
        }
        arr.push(input[i]);
      }

      str = "";
    } else if (input[i] == "_") {
      if (str == "log") {
        continue;
      }
      if (str.length > 0) {
        arr.push(str);
      }
      arr.push(input[i]);
      str = "";
    } else if (input[i] == " ") {
      if (str.length > 0) {
        arr.push(str);
      }
      str = "";
    } else {
      str += input[i];
    }
  }
  if (str.length > 0) {
    arr.push(str);
  }
  return arr;
};

export { toInfixArray };
