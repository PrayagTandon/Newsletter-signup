'use strict'

// SELECTING ELEMNETS
const mainBox = document.querySelector('.main-box');
const successBox = document.querySelector('.success-box');
const submitBtn = document.querySelector('.btn-submit');
const successBtn = document.querySelector('.btn--success');

const emailInputText = document.querySelector('.email-input');

// APPLYING LOGIC
submitBtn.addEventListener('click', function () {


    if (emailInputText === '') {
        alert('Please enter an E-mail Address!');
    }
    else {
        mainBox.classList.toggle('hidden');
        successBox.classList.toggle('hidden');
    }

})

successBtn.addEventListener('click', function () {
    mainBox.classList.toggle('hidden');
    successBox.classList.toggle('hidden');
})
