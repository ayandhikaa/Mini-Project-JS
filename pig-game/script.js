'use strict';

// mengambil elemen player
const player0El = document.querySelector('.player0');
const player1El = document.querySelector('.player1');

// mengambil elemen score
const score0EL = document.querySelector('#score0');
const score1EL = document.getElementById('score1');

// mengambil elemen dadu
const diceEl = document.querySelector('.dice-img');

// mengambil elemen button
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

// mengambil elemen current score
const current0EL = document.getElementById('current0');
const current1EL = document.getElementById('current1');

let scores, currentScore, activePlayer, playing;

const init = function() {
    //value awal
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    //mengubah konten
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active');
}

// function restart game
function switchPlayer() {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
}


//fungsi button roll dadu
btnRoll.addEventListener('click', function() {
    if (playing) {

        //1. membuat random dadu
        const dice = Math.floor(Math.random() * 6) + 1;

        //2. menampilkan dadu
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. cek hasil dadu 1:
        if (dice !== 1) {
        //jika false, nilai dadu masuk ke current score
            currentScore += dice;
            document.getElementById(`current${activePlayer}`).textContent = currentScore;
        } else {
        // jika true, ganti ke player selanjutnya
            switchPlayer();
        }

    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        //1. tambah current score ke score player
        scores[activePlayer] += currentScore;
        document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];

        //2. cek score apakah >=100
        if (scores[activePlayer] >= 10) {
            //game selesai
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player${activePlayer}`).classList.add('player-winner');
            document.getElementById(`name${activePlayer}`).textContent = `Winner! 🎉`;

            document.querySelector(`.player${activePlayer}`).classList.remove('player-active');

        } else {
        //4. ganti ke player selanjutnya
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);