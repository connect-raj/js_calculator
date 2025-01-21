import { calculate } from "./index.js";

const eventListeners = () => {
  const buttonsList = document.querySelectorAll(".button");
  const input = document.querySelector("input");
  const result = document.querySelector(".result");
  const history = document.querySelector(".history-container");
  const histClearBtn = document.querySelector(".hist-clear");
  const literals = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
  ];

  const uiToggle = document.querySelector(".ui-toggle");
  const I = document.querySelector(".fa-moon");

  uiToggle.addEventListener("click", () => {
    if (I.classList.value.includes("fa-moon")) {
      document.body.style.backgroundColor = "white";
      I.classList.remove("fa-moon");
      I.classList.add("fa-circle-half-stroke");
    } else {
      document.body.style.backgroundColor = "#4b5563";
      I.classList.remove("fa-circle-half-stroke");
      I.classList.add("fa-moon");
    }
  });

  buttonsList.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.value == "clear") {
        input.value = "";
        result.innerHTML = "";
      } else if (button.dataset.value == "√") {
        input.value += `√`;
      } else if (button.dataset.value == "powx") {
        input.value += "10^";
      } else if (button.dataset.value == "backspace") {
        input.value = input.value.substring(0, input.value.length - 1);
        result.innerHTML = "";
      } else if (button.dataset.value == "pow2") {
        input.value += "^2";
      } else {
        // console.log(button.dataset.value);
        input.value += button.dataset.value;
      }
    })
  );

  histClearBtn.addEventListener("click", () => {
    history.innerHTML = "";
  });

  document.addEventListener("keypress", (event) => {
    if (literals.includes(event.key)) {
      if (event.key == "/") {
        input.value += "÷";
      } else {
        input.value += event.key;
      }
    } else if (event.key === "Enter") {
      calculate();
    }
  });
};

export { eventListeners };
