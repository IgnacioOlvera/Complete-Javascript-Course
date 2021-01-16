'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const createClickEvent = (obj, func) => {
  obj.addEventListener('click', func);
};

const closeModal = () => {
  modal.classList.add('hidden'); //Get the list of classes and add clas hidden, we alse can provide more than one class divided by a comma
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden'); //Get the list of classes and remove class hidden, we alse can provide more than one class divided by a comma
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(element => createClickEvent(element, () => openModal()));

createClickEvent(btnCloseModal, closeModal);

createClickEvent(overlay, closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
