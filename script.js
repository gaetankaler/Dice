let newGame = document.querySelector(".newGame");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let dice = document.querySelector("#dice");
let scorePlayer0 = document.querySelector(".scoreSave-0");
let scorePlayer1 = document.querySelector(".scoreSave-1");

let global, round, activePlayer, gamePlay;
start();

document.querySelector(".roll").addEventListener("click", () => {
  if (gamePlay) {
    let numberDice = Math.floor(Math.random() * 6) + 1;

    dice.style.display = "block";
    dice.src = `./asset/img/dice-${numberDice}.png`;

    if (numberDice !== 1) {
      round += numberDice;
      document.querySelector(`.scoreSave-${activePlayer}`).textContent = round;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".hold").addEventListener("click", () => {
  if (gamePlay) {
    global[activePlayer] += round;
    document.querySelector(`.score-${activePlayer}`).textContent =
      global[activePlayer];

    if (global[activePlayer] >= 100) {
      document.querySelector(`.name-${activePlayer}`).textContent = "Winner!";
      document.querySelector("#dice").style.display = "none";
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active");
      gamePlay = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  round = 0;
  document.querySelector(".scoreSave-0").textContent = "0";
  document.querySelector(".scoreSave-1").textContent = "0";

  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");
}

document.querySelector("#dice").style.display = "none";

document.querySelector(".newGame").addEventListener("click", start);

function start() {
  global = [0, 0];
  round = 0;
  activePlayer = 0;
  gamePlay = true;

  document.querySelector("#dice").style.display = "none";

  document.querySelector(".score-0").textContent = "0";
  document.querySelector(".score-1").textContent = "0";
  document.querySelector(".scoreSave-0").textContent = "0";
  document.querySelector(".scoreSave-1").textContent = "0";
  document.querySelector(".name-0").textContent = "PLAYER 1";
  document.querySelector(".name-1").textContent = "PLAYER 2";
  document.querySelector(".player-0").classList.remove("winner");
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-0").classList.remove("active");
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".player-0").classList.add("active");
}
function color() {
  if (scoreSave - 0 > scoreSave - 1) {
    document.querySelector(".name-0").style.color = "green";
    document.querySelector(".name-1").style.color = "red";
  } else {
    document.querySelector(".name-0").style.color = "red";
    document.querySelector(".name-1").style.color = "green";
  }
}
