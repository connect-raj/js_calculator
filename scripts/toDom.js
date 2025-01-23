const resultBlock = document.querySelector(".result");
let historyBlock = document.querySelector(".history-container");
let history = [];

const toDom = (result, equation) => {
  resultBlock.innerHTML = result;
  toHistory(result, equation);
};

// const addItem = () => {
//   const nodes = document.querySelectorAll(".item");

//   nodes.forEach((node) => history.push(node.outerHTML));

//   localStorage.setItem("history", JSON.stringify(history));
// };

const toHistory = (result, equation) => {
  historyBlock.innerHTML += `
  <div class="item">
    <div class="title" style="display:flex;">
      <div class="equation">${equation}</div>
      <i class="fa-solid fa-trash" id="deleteBTN" onClick="removeElement(this);"></i>
    </div>
    <div class="answer">${result}</div>
  </div>
  `;

  // addItem();
};

export { toDom };
