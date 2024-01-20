'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//functions to display value
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBodyStyle = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};
const displayNumberStyle = function (numberStyle) {
  document.querySelector('.number').style = numberStyle;
};

//button handler (check)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('Enter a valid Number!!🙃');
    //when the player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎊');
    displayNumber(secretNumber);
    displayBodyStyle('#60b347');
    displayNumberStyle('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!!' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('you lost the game 😭😭');
      displayScore(0);
    }
  }
});
//button handler (again)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  displayBodyStyle('#222');
  displayNumberStyle('15rem');
  document.querySelector('.guess').value = '';
});
