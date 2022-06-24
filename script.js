let player1 = "Player 1"
let player2 = "Player 2"
let numberDice = Math.floor(Math.random() * 6 + 1);
let newGame = document.querySelector(".newGame");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let dice = document.querySelector("#dice");
let round = ""; //score temporaire
let global = "";  //score global


newGame.addEventListener("click", (e) => {
  if (confirm("Start a new game ?")) {
    //reset la game 
  }
});

roll.addEventListener("click", (e) => {
  numberDice;
  if (numberDice === 1)
  //lance numberDice si numberDice = 1 alors perdu
  //sinon rajoute le score du dé à "score1" ou "score2" suivant le joueur qui joue
});

hold.addEventListener("click", (e) => {
  //met le score actuel dans "current1" ou "current2" suivant le joueur qui joue
});

dice.addEventListener("click", (e) => {
  // === a roll
});

//definir quel joueur joue