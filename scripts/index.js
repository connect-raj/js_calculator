import { toInfixArray } from "./toInfixArray.js";
import { toPostfixArray } from "./toPostfixArray.js";
import { evalPostfix } from "./evalPostfix.js";
import { toDom } from "./toDom.js";
import { eventListeners } from "./eventListeners.js";

const calcButton = document.querySelector(".calc");
eventListeners();

//handling portions for calculations
calcButton.addEventListener("click", () => {
  const equation = document.getElementById("inputCalc").value;
  let infixArray = toInfixArray(equation);
  let postfixArray = toPostfixArray(infixArray, -1);
  let result = evalPostfix(postfixArray);
  console.log(result);
  toDom(result);
});
