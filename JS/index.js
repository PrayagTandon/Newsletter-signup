'use strict'

// SELECTING ELEMNETS
const mainBox = document.querySelector('.main-box');
const successBox = document.querySelector('.success-box');
const submitBtn = document.querySelector('.btn-submit');
const successBtn = document.querySelector('.btn--success');

const emailInputText = document.querySelector('#email');
const successEmailText = document.querySelector('.input-email');

// APPLYING LOGIC

// SUBMIT BTN LISTENER
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let submit = false;
    const emailValue = emailInputText.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    if (emailValue === "") {
        alert('Please enter an E-mail to receive exciting News!')
    }
    else if (!emailPattern.test(emailValue)) {
        alert('Please enter a Valid E-mail!');
    }
    else {
        submit = true;
    }

    if (submit) {
        mainBox.classList.toggle('hidden');
        successBox.classList.toggle('hidden');
        successEmailText.textContent = emailValue;
    }
});


// SUCCESS BTN LISTENER
successBtn.addEventListener('click', function (e) {
    e.preventDefault();
    mainBox.classList.toggle('hidden');
    successBox.classList.toggle('hidden');

});