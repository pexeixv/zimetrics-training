const $ = (q: string, e = document) => e.querySelector(q);
const $$ = (q: string, e = document) => e.querySelectorAll(q);

const userHand = $("#userHand")! as HTMLImageElement;
const cpuHand = $("#cpuHand")! as HTMLImageElement;

const userScore = $("#userScore")! as HTMLSpanElement;
const cpuScore = $("#cpuScore")! as HTMLSpanElement;

const hands = ["stone", "paper", "scissor"];

const texts = $$(".texts");
const winText = $("#winText")! as HTMLSpanElement;
const loseText = $("#loseText")! as HTMLSpanElement;
const tieText = $("#tieText")! as HTMLSpanElement;

const youLose = $("#loser")! as HTMLDivElement;
const youWin = $("#winner") as HTMLDivElement;

const random = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)];

const optionSelected = (userChoice: string) => {
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
      userScore.innerText = String(+userScore.innerText + 1);
      if (userScore.innerText === "3") {
        youWin.classList.remove("scale-0");
      }
    }, 700);
  }
};

const options = $$("#options > button") as NodeListOf<HTMLButtonElement>;

const reset = () => {
  userScore.innerText = "0";
  cpuScore.innerText = "0";
  cpuHand.classList.add("-translate-x-[150%]");
  userHand.classList.add("translate-x-[150%]");
  youLose.classList.add("scale-0");
  youWin.classList.add("scale-0");
  texts.forEach((text) => text.classList.add("scale-0"));
};

window.addEventListener("keydown", (e) => {
  const key = e.key;

  switch (key) {
    case "1":
    case "2":
    case "3":
      options[+key - 1].click();
      break;
    case "r":
      reset();
      break;
  }
});
