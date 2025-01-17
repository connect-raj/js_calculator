import { toInfixArray } from "./toInfixArray.js";
import { toPostfixArray } from "./toPostfixArray.js";
import { evalPostfix } from "./evalPostfix.js";

const calcButton = document.querySelector(".calc");
// const equation = document.querySelector(".inputCalc").value;
let equation = "sin(30)";

//handling portions for calculations
calcButton.addEventListener("click", () => {
  let infixArray = toInfixArray(equation);
  let postfixArray = toPostfixArray(infixArray, -1);
  console.log(postfixArray);
  evalPostfix(postfixArray);
});
