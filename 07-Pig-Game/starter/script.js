'use strict';

const createClickEvent = (obj, func) => {
  obj.addEventListener('click', func);
};

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = currentPlayer => {
  if (currentPlayer) {
    sectionPlayer2.classList.remove('player--active');
    sectionPlayer1.classList.add('player--active');
  } else {
    sectionPlayer1.classList.remove('player--active');
    sectionPlayer2.classList.add('player--active');
  }
};

const resetGame = () => {
  image.setAttribute('src', `dice-1.png`);
  accumulativePlayer1.textContent = 0;
  accumulativePlayer2.textContent = 0;
  displayScorePlayer1.textContent = 0;
  displayScorePlayer2.textContent = 0;
  accumulative = 0;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  currentPlayer = true;
  switchPlayer(currentPlayer);
};
//Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const image = document.querySelector('.dice');
const accumulativePlayer1 = document.querySelector('#current--0');
const accumulativePlayer2 = document.querySelector('#current--1');
const displayScorePlayer1 = document.querySelector('#score--0');
const displayScorePlayer2 = document.querySelector('#score--1');
const sectionPlayer1 = document.querySelector('.player--0');
const sectionPlayer2 = document.querySelector('.player--1');
//Variables
let currentPlayer = true;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let accumulative = 0;
//Listeners
createClickEvent(btnRoll, () => {
  const randomNumber = generateRandomNumber();
  image.setAttribute('src', `dice-${randomNumber}.png`);
  if (randomNumber === 1) {
    accumulative = 0;
    currentPlayer
      ? (accumulativePlayer1.textContent = 0)
      : (accumulativePlayer2.textContent = 0);
    currentPlayer = !currentPlayer;
    switchPlayer(currentPlayer);
  } else {
    accumulative += randomNumber;
    currentPlayer
      ? (accumulativePlayer1.textContent = accumulative)
      : (accumulativePlayer2.textContent = accumulative);
  }
});

createClickEvent(btnHold, () => {
  if (scorePlayer2 > 101 || scorePlayer1 > 101) {
    scorePlayer1 > scorePlayer2 ? alert('Player1 wins') : alert('player2wibs');
  } else {
    if (currentPlayer) {
      scorePlayer1 += accumulative;
      displayScorePlayer1.textContent = scorePlayer1;
      accumulativePlayer1.textContent = 0;
    } else if (!currentPlayer) {
      scorePlayer2 += accumulative;
      displayScorePlayer2.textContent = scorePlayer2;
      accumulativePlayer2.textContent = 0;
    }
    currentPlayer = !currentPlayer;
    switchPlayer(currentPlayer);
    accumulative = 0;
  }
});

createClickEvent(btnNewGame, resetGame);
