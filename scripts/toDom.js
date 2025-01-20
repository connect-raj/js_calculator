const resultBlock = document.querySelector(".result");

const toDom = (number) => {
  resultBlock.innerHTML = number;
};

export { toDom };
