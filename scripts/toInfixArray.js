import { prec } from "./precedence.js";

const toInfixArray = (input) => {
  const arr = [];
  let str = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if ("+*/()^%,{}[]!=<>".includes(char)) {
      if (str.length > 0) {
        arr.push(str);
        str = "";
      }

      // Handle unary negative numbers explicitly
      if (char === "-" && (i === 0 || prec[arr[arr.length - 1]] > 0)) {
        arr.push("0"); // Add a leading 0 for unary negatives
      }

      arr.push(char);
      continue;
    }

    // for log_10
    if (char === "_") {
      if (str === "log") {
        continue;
      }
      if (str.length > 0) {
        arr.push(str);
      }
      arr.push(char);
      str = "";
      continue;
    }

    // Handle whitespace
    if (char === " ") {
      if (str.length > 0) {
        arr.push(str);
        str = "";
      }
      continue;
    }

    // Accumulate characters into `str`
    str += char;
  }

  // Push the last token if any
  if (str.length > 0) {
    arr.push(str);
  }

  return arr;
};

export { toInfixArray };
