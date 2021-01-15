'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//Function to reduce Score
const reduceScore = () => {
  if (score <= 0) {
    document.querySelector('.score').textContent = 'You lost the game ';
  } else {
    score--;
    document.querySelector('.score').textContent = score;
  }
};
//Generate Secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//Declare Score
let score = 20;
//Select elements
const message = document.querySelector('.message');
const check = document.querySelector('.check');
check.addEventListener('click', () => {
  //Get input from user
  const guess = Number(document.querySelector('.guess').value);
  //Conditionals
  if (!guess && guess !== 0) {
    //No info provided
    message.textContent = 'No Number!';
  } else if (guess === secretNumber) {
    //When player wins
    message.textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guess > secretNumber) {
    //When guess is too high
    message.textContent = 'Correct Number!';
    message.textContent = 'Too High';
    reduceScore();
  } else if (guess < secretNumber) {
    //When guess is too low
    message.textContent = 'Too Low';
    reduceScore();
  }
});
