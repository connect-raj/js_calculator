const eventListeners = () => {
  const buttonsList = document.querySelectorAll("button");
  const input = document.querySelector("input");
  const result = document.querySelector(".result");

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
};

export { eventListeners };
