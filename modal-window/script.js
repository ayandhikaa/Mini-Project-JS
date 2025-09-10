'use strict';

const modalContainer = document.querySelector('main > .modal');
const overlay = document.querySelector('.overlay');
const innerModals = document.querySelectorAll('main > .modal > .modal');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal button');

// Ensure only the selected modal content is visible when opening
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        for (let j = 0; j < innerModals.length; j++) {
            innerModals[j].style.display = 'none';
        }
        if (innerModals[i]) innerModals[i].style.display = 'block';
        modalContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModal = function () {
    modalContainer.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnCloseModal.length; i++) {
    btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
        closeModal();
    }
});