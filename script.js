"use strict";
// Game Code Starts here....

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = `?`;
// document.querySelector(".number").textContent = secretNumber;

let messageEl = document.querySelector(".message");
let displayMessage = function(message) {
  messageEl.textContent = message;
};
let scoreEl = document.querySelector(".score");
let score = 10;
scoreEl.textContent = score;
let highscoreEl = document.querySelector(`.highscore`);
let highestScore = 0;

let reset = function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = `?`;

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  score = 10;
  scoreEl.textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "150px";
  document.querySelector(".number").style.transition = "width,1.5s";
};
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") reset();
});
document.querySelector(".again").addEventListener("click", reset);

let check = function() {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (guess === 0) displayMessage(`⛔️ No Response`);
  // when input guess is out of range
  else if (guess > 20 || guess < 0) displayMessage(`😵 Pls check the range`);
  // When guess id too low or too high...
  else if (guess !== secretNumber) {
    if (score < 1) {
      displayMessage(`💀 You Lost the game!`);
      document.querySelector("body").style.backgroundColor = "red";
      scoreEl.textContent = 0;
    } else if (score > 0) {
      score--;
      scoreEl.textContent = score;
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
    }
  }
  /*
    else if (guess < secretNumber) {
      score--;
      scoreEl.textContent = score;
      displayMessage(`📉 Too Low!`);
    } // When there larger/high input
    else if (guess > secretNumber) {
      displayMessage(`📈 Too High!`);
      score--;
      scoreEl.textContent = score;
    } 
    */
  // When Players wins the game
  else if (guess === secretNumber) {
    displayMessage(`🥳 Congratulation!`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "300px";
    document.querySelector(".number").style.transition = "width,1.5s";
    if (score > highestScore) highestScore = score;
    highscoreEl.textContent = highestScore;
  }
};
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") check();
});
document.querySelector(".check").addEventListener("click", check);
