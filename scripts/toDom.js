const resultBlock = document.querySelector(".result");
let historyBlock = document.querySelector(".history-container");

const toDom = (result, equation) => {
  resultBlock.innerHTML = result;
  toHistory(result, equation);
};

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
};

export { toDom };
