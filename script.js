// Manque : Animation, Victoire
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

let counter = 0;
let s0 = 0;
let s1 = 0;

dice.style.display = "none";

roll.addEventListener("click", () => {
  let rndNum = rnd();
  counter += rndNum;
  dice.classList.toggle("animation");
  dice.style.display = "block";
  setDiceImgSrc(rndNum);
  if (rndNum !== 1) {
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
  let rndNum = rnd();
  dice.classList.toggle("animation");
  counter += rndNum;
  dice.style.display = "block";
  setDiceImgSrc(rndNum);
  if (rndNum !== 1) {
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
    s0 += counter;
    score0.textContent = s0;
    current0.textContent = 0;
    if (s0 >= 100) {
      alert("Player 1 Wins!");
      resetGame();
      return;
    }
  } else {
    s1 += counter;
    score1.textContent = s1;
    current1.textContent = 0;
    if (s1 >= 100) {
      alert("Player 2 Wins!");
      resetGame();
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
  let rndice = `./asset/img/dice-${num}.png`;
  dice.setAttribute("src", rndice);
}

function rnd() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetGame() {
  dice.style.display = "none";
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  s0 = 0;
  s1 = 0;
  counter = 0;
  if (!panel0.classList.contains("active")) {
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
  }
}
