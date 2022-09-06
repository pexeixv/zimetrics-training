var $ = function (q, e) {
    if (e === void 0) { e = document; }
    return e.querySelector(q);
};
var $$ = function (q, e) {
    if (e === void 0) { e = document; }
    return e.querySelectorAll(q);
};
var userHand = $("#userHand");
var cpuHand = $("#cpuHand");
var userScore = $("#userScore");
var cpuScore = $("#cpuScore");
var hands = ["stone", "paper", "scissor"];
var texts = $$(".texts");
var winText = $("#winText");
var loseText = $("#loseText");
var tieText = $("#tieText");
var youLose = $("#loser");
var youWin = $("#winner");
var random = function (list) {
    return list[Math.floor(Math.random() * list.length)];
};
var optionSelected = function (userChoice) {
    userHand.classList.add("translate-x-[150%]");
    setTimeout(function () { return userHand.classList.remove("translate-x-[150%]"); }, 500);
    setTimeout(function () { return (userHand.src = "./img/".concat(userChoice, ".svg")); }, 500);
    var cpuChoice = random(hands);
    cpuHand.classList.add("-translate-x-[150%]");
    setTimeout(function () { return cpuHand.classList.remove("-translate-x-[150%]"); }, 500);
    setTimeout(function () { return (cpuHand.src = "./img/".concat(cpuChoice, ".svg")); }, 500);
    texts.forEach(function (text) { return text.classList.add("scale-0"); });
    if (cpuChoice === userChoice) {
        setTimeout(function () { return tieText.classList.remove("scale-0"); }, 500);
        return;
    }
    var winner = "user";
    if (cpuChoice == "stone" && userChoice == "scissor")
        winner = "cpu";
    if (cpuChoice == "scissor" && userChoice == "paper")
        winner = "cpu";
    if (cpuChoice == "paper" && userChoice == "stone")
        winner = "cpu";
    if (winner === "cpu") {
        setTimeout(function () { return loseText.classList.remove("scale-0"); }, 500);
        setTimeout(function () {
            cpuScore.innerText = String(+cpuScore.innerText + 1);
            if (cpuScore.innerText === "3") {
                youLose.classList.remove("scale-0");
            }
        }, 700);
    }
    else {
        setTimeout(function () { return winText.classList.remove("scale-0"); }, 500);
        setTimeout(function () {
            userScore.innerText = String(+userScore.innerText + 1);
            if (userScore.innerText === "3") {
                youWin.classList.remove("scale-0");
            }
        }, 700);
    }
};
var options = $$("#options > button");
var reset = function () {
    userScore.innerText = "0";
    cpuScore.innerText = "0";
    cpuHand.classList.add("-translate-x-[150%]");
    userHand.classList.add("translate-x-[150%]");
    youLose.classList.add("scale-0");
    youWin.classList.add("scale-0");
    texts.forEach(function (text) { return text.classList.add("scale-0"); });
};
window.addEventListener("keydown", function (e) {
    var key = e.key;
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
