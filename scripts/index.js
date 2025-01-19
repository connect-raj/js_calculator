import { toInfixArray } from "./toInfixArray.js";
import { toPostfixArray } from "./toPostfixArray.js";
import { evalPostfix } from "./evalPostfix.js";

const calcButton = document.querySelector(".calc");

//handling portions for calculations
calcButton.addEventListener("click", () => {
  const equation = document.getElementById("inputCalc").value;
  console.log(equation);
  let infixArray = toInfixArray(equation);
  console.log(infixArray);
  let postfixArray = toPostfixArray(infixArray, -1);
  console.log(postfixArray);
  evalPostfix(postfixArray);
});
