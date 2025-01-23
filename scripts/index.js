import { toInfixArray } from "./toInfixArray.js";
import { toPostfixArray } from "./toPostfixArray.js";
import { evalPostfix } from "./evalPostfix.js";
import { toDom } from "./toDom.js";
import { eventListeners } from "./eventListeners.js";

const calcButton = document.querySelector(".calc");
eventListeners();

const removeElement = (child) => {
  console.log(child);

  let parent = child.parentNode;
  let parentUpper = parent.parentNode;

  parentUpper.parentNode.removeChild(parentUpper);
};

const calculate = () => {
  const equation = document.getElementById("inputCalc").value;
  let infixArray = toInfixArray(equation);
  let postfixArray = toPostfixArray(infixArray, -1);
  let result = evalPostfix(postfixArray);
  if (result == undefined) {
    result = eval(equation);
    console.log(equation);
  }
  toDom(result, equation);
};

//handling portions for calculations
calcButton.addEventListener("click", () => {
  calculate();
  // removeChild(document.querySelectorAll("#deleteBTN"));
});

export { calculate };
