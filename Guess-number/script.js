'use strict';
// console.log(document.querySelector('.info').textContent);
// document.querySelector('.message').textContent = 'wow';

let secNumber = 25; //Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highScore = 0;


document.querySelector('.btnCheck').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess').value);
    if (!guessNum) {
        document.querySelector('.message').textContent = 'No number !';

    } else if (guessNum === secNumber) {
        document.querySelector('.message').textContent = 'Wow! Correct Number YEY🎉';
        document.querySelector('.number').textContent = secNumber;
        document.querySelector('body').style.backgroundColor = '#fce76f';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };

    } else if (guessNum > secNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High, lower it!';
            score--;
            document.querySelector('.score').textContent = 0;       
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else if (guessNum < secNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low, raise it!';
            score--;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    document.querySelector('.score').textContent = score;
});

document.querySelector('.btnAgain').addEventListener('click', function () {
    secNumber = Math.trunc(Math.random() * 25) + 1;
    score = 25;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#ffff';
});