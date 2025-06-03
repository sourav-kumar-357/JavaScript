'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '👏Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


// Computing the Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Defining the score and high score
let score = 20;
let highScore = 0;

// Initialising the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When there is correct Input
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👏 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // Setting the highScore
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    // Changing the color for the background when the answer is correct
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Changing the size of the number when the correct answer
    document.querySelector('.number').style.width = '30rem';

    // when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝ Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Setting up the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

