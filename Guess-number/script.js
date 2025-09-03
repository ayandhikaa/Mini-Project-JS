'use strict';

let secNumber = Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highScore = 0;

const displayPesan = function(message) {
    document.quesrySelector('.message').textContent = message;
}


document.querySelector('.btnCheck').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value);
    if (!guessNum) {
        displayPesan('No number !');

    } else if (guessNum === secNumber) {
        displayPesan('Wow! Correct Number YEY🎉');
        document.querySelector('.number').textContent = secNumber;
        document.querySelector('body').style.backgroundColor = '#fce76f';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };

    } else if (guessNum !== secNumber) {
        if (score > 1) {
            displayPesan(guessNum > secNumber ? 'Too High, lower it!' : 'Too low, higher it!');
            score--;
            document.querySelector('.score').textContent = score;   
        } else {
            displayPesan('You lost the game!');
            document.querySelector('.score').textContent = 0;    
        }
    }    
});

document.querySelector('.btnAgain').addEventListener('click', function () {
    secNumber = Math.trunc(Math.random() * 25) + 1;
    score = 25;
    displayPesan('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#ffff';
});

document.querySelector('.btnUp').addEventListener('click', function () {
    if (document.querySelector('.guess').value < 25) {
        document.querySelector('.guess').value++;
    }
});

document.querySelector('.btnDown').addEventListener('click', function () {
    if (document.querySelector('.guess').value > 0) {
        document.querySelector('.guess').value--;
    }
});