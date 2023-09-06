'use strict'

// SELECTING ELEMNETS
const mainBox = document.querySelector('.main-box');
const successBox = document.querySelector('.success-box');
const submitBtn = document.querySelector('.btn-submit');

// APPLYING LOGIC
submitBtn.addEventListener('click', function () {
    mainBox.classList.toggle('hidden');
    successBox.classList.toggle('hidden');
})