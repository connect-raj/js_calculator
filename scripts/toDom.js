const resultBlock = document.querySelector(".result");
let historyBlock = document.querySelector(".history-container");
let history = [];

const toDom = (result, equation) => {
  resultBlock.innerHTML = result;
  toHistory(result, equation);
};

const toHistory = (result, equation) => {
  const obj = [equation, result];
  historyBlock.innerHTML += `
  <div class="item">
    <div class="title" style="display:flex;">
      <div class="equation" data-value="${equation}" onClick = "loadtoinp(this)">${equation}</div>
      <i class="fa-solid fa-trash" id="deleteBTN" onClick="removeElement(this);"></i>
    </div>
    <div class="content" style="display:flex;">
    <div class="result" data-value="${result}">${result}</div>
    <i class="fa-solid fa-plus" onClick="addNode(this)"></i>
    </div>
  </div>
  `;
};

export { toDom };
