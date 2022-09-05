const $ = (q: string, e = document) => e.querySelector(q);
const $$ = (q: string, e = document) => e.querySelectorAll(q);

const userHand = $("#userHand")! as HTMLImageElement;
const cpuHand = $("#cpuHand")! as HTMLImageElement;

const userScore = $("#userScore")! as HTMLElement;
const cpuScore = $("#cpuScore")! as HTMLElement;

const hands = ["stone", "paper", "scissor"];

const texts = $$(".texts");
const winText = $("#winText")! as HTMLElement;
const loseText = $("#loseText")! as HTMLElement;
const tieText = $("#tieText")! as HTMLElement;

const youLose = $("#loser")! as HTMLElement;
const youWin = $("#winner") as HTMLElement;

const random = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const optionSelected = (that) => {
  const srcArray = that.src.split("/");
  const userChoice: string = srcArray[srcArray.length - 1].replace(".svg", "");

  userHand.classList.add("translate-x-[150%]");
  setTimeout(() => userHand.classList.remove("translate-x-[150%]"), 500);
  setTimeout(() => (userHand.src = `./img/${userChoice}.svg`), 500);

  const cpuChoice = random(hands);
  cpuHand.classList.add("-translate-x-[150%]");
  setTimeout(() => cpuHand.classList.remove("-translate-x-[150%]"), 500);
  setTimeout(() => (cpuHand.src = `./img/${cpuChoice}.svg`), 500);

  texts.forEach((text) => text.classList.add("scale-0"));
  if (cpuChoice === userChoice) {
    setTimeout(() => tieText.classList.remove("scale-0"), 500);
    return;
  }

  let winner = "user";

  if (cpuChoice == "stone" && userChoice == "scissor") winner = "cpu";
  if (cpuChoice == "scissor" && userChoice == "paper") winner = "cpu";
  if (cpuChoice == "paper" && userChoice == "stone") winner = "cpu";

  if (winner === "cpu") {
    setTimeout(() => loseText.classList.remove("scale-0"), 500);
    setTimeout(() => {
      cpuScore.innerText = String(+cpuScore.innerText + 1);

      if (cpuScore.innerText === "3") {
        youLose.classList.remove("scale-0");
      }
    }, 700);
  } else {
    setTimeout(() => winText.classList.remove("scale-0"), 500);
    setTimeout(() => {
      console.log(userScore.innerText);
      userScore.innerText = String(+userScore.innerText + 1);
      if (userScore.innerText === "3") {
        youWin.classList.remove("scale-0");
      }
    }, 700);
  }
};

const options = $$("#options img");

window.addEventListener("keydown", (e) => {
  if ("123".includes(e.key)) {
    options[+e.key - 1].click();
  }
  if ("r".includes(e.key)) reset();
});

const reset = () => {
  userScore.innerText = "0";
  cpuScore.innerText = "0";
  cpuHand.classList.add("-translate-x-[150%]");
  userHand.classList.add("translate-x-[150%]");
  youLose.classList.add("scale-0");
  youWin.classList.add("scale-0");
  texts.forEach((text) => text.classList.add("scale-0"));
};
