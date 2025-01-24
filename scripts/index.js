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
  if ("÷*%^!".includes(equation[0])) {
    alert("Input should not start with operator");
  } else if (equation) {
    let infixArray = toInfixArray(equation);
    let postfixArray = toPostfixArray(infixArray, -1);
    let result = evalPostfix(postfixArray);
    if (result == undefined) {
      result = eval(equation);
      console.log(equation);
    }
    toDom(result, equation);
  } else {
    alert("Input should not be empty");
  }
};

//handling portions for calculations
calcButton.addEventListener("click", () => {
  calculate();
  // removeChild(document.querySelectorAll("#deleteBTN"));
});

export { calculate };
