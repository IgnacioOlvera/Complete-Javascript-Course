'use strict';

//Function to reduce Score
const reduceScore = input => {
  if (points < 1) {
    setMessage(score, 'You lost the game ');
  } else {
    points--;
    score.textContent = points;
  }
  input < secretNumber
    ? setMessage(message, 'Too Low')
    : setMessage(message, 'Too High!');
};

//Function to Generate Random Number
const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
//Function to Set a message
const setMessage = (element, message) => {
  element.textContent = message;
};
//function to create click event
const createClickEvent = (obj, func) => {
  obj.addEventListener('click', func);
};

//Generate Secret Number
let secretNumber = generateSecretNumber();
//Declare Score
let points = 20;
let highScore = 0;
//Select elements
const body = document.querySelector('body');
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const highest = document.querySelector('.highscore');

//Create click event for element check
createClickEvent(check, () => {
  //Get input from user
  const input = Number(guess.value);
  //Conditionals
  if (!input) {
    //No info provided
    setMessage(message, 'No Number');
  } else if (input === secretNumber) {
    //When player wins
    setMessage(message, 'Correct Number');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (highScore < points) {
      highScore = points;
      highest.textContent = highScore;
    }
  } else {
    reduceScore(input);
  }
});

//Create click element for element again
createClickEvent(again, () => {
  secretNumber = generateSecretNumber();
  points = 20;
  setMessage(message, 'Start Guessing');
  setMessage(number, '?');
  number.style.width = '15rem';
  setMessage(score, points);
  guess.value = '';
  body.style.backgroundColor = '#222';
});
