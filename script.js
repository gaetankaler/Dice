const dice = document.querySelector("#dice");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const current0 = document.querySelector(".scoreSave-0");
const current1 = document.querySelector(".scoreSave-1");
const score0 = document.querySelector(".score-0");
const score1 = document.querySelector(".score-1");
const newGame = document.querySelector(".newGame");
const panel0 = document.querySelector(".player-0");
const panel1 = document.querySelector(".player-1");
const name0 = document.querySelector(".name-0");
const name1 = document.querySelector(".name-1");

let counter = 0;
let scorePlayer0 = 0;
let scorePlayer1 = 0;

dice.style.display = "none";

roll.addEventListener("click", () => {
  let roundNum = round();
  counter += roundNum;
  dice.style.display = "block";
  setDiceImgSrc(roundNum);
  if (roundNum !== 1) {
    if (panel0.classList.contains("active")) {
      current0.textContent = counter;
    } else {
      current1.textContent = counter;
    }
  } else {
    counter = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
  }
});
dice.addEventListener("click", () => {
  let roundNum = round();
  counter += roundNum;
  dice.style.display = "block";
  setDiceImgSrc(roundNum);
  if (roundNum !== 1) {
    if (panel0.classList.contains("active")) {
      current0.textContent = counter;
    } else {
      current1.textContent = counter;
    }
  } else {
    counter = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
  }
});

hold.addEventListener("click", () => {
  if (panel0.classList.contains("active")) {
    scorePlayer0 += counter;
    score0.textContent = scorePlayer0;
    current0.textContent = 0;
    if (scorePlayer0 >= 100) {
      name0.textContent = "Winner !";
      name1.textContent = "Looser !";
      roll.style.visibility = "hidden";
      dice.style.visibility = "hidden";
      hold.style.visibility = "hidden";
      return;
    }
  } else {
    scorePlayer1 += counter;
    score1.textContent = scorePlayer1;
    current1.textContent = 0;
    if (scorePlayer1 >= 100) {
      name1.textContent = "Winner !";
      name0.textContent = "Looser !";
      roll.style.visibility = "hidden";
      dice.style.visibility = "hidden";
      hold.style.visibility = "hidden";
      return;
    }
  }
  counter = 0;
  panel0.classList.toggle("active");
  panel1.classList.toggle("active");
});

newGame.addEventListener("click", () => {
  resetGame();
});

function setDiceImgSrc(num) {
  let roundDice = `./asset/img/dice-${num}.png`;
  dice.setAttribute("src", roundDice);
}

function round() {
  dice.animate(
    [
      { transform: "rotate(20deg)" },
      { transform: "rotate(-20deg)" },
      { transform: "rotate(20deg)" },
      { transform: "rotate(-20deg)" },
      { transform: "rotate(20deg)" },
    ],
    {
      duration: 500,
    }
  );
  return Math.floor(Math.random() * 6) + 1;
}

function resetGame() {
  dice.style.display = "none";
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  name0.textContent = "PLAYER 1";
  name1.textContent = "PLAYER 2";
  roll.style.visibility = "visible";
  dice.style.visibility = "visible";
  hold.style.visibility = "visible";
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  counter = 0;
  if (!panel0.classList.contains("active")) {
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
  }
}
