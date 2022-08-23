const $ = (q, e = document) => e.querySelector(q);
const $$ = (q, e = document) => e.querySelectorAll(q);

const display = $(".display");

const appendToDisplay = (buttonText) => {
  const displayText = display.innerText;

  if (
    "/*-+".includes(buttonText.trim()) &&
    "/*-+".includes(displayText[displayText.length - 1])
  ) {
    const sliced = display.innerText.slice(0, -1);
    display.innerText = sliced;
  }
  display.innerText += buttonText;
};

const evaluateResult = () => {
  const string = display.innerText;
  const result = eval(string);
  display.innerText = result;
};

const clearFromDisplay = (clearType) => {
  if (clearType === "C") {
    display.innerText = "";
    return;
  }
  const sliced = display.innerText.slice(0, -1);
  display.innerText = sliced;
};

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if ("1234567890/*-+.".includes(key.trim())) appendToDisplay(key);
  if (key === "Enter") evaluateResult();
  if (key === "Backspace") clearFromDisplay("<");
  if (key === "Delete") clearFromDisplay("C");
});
