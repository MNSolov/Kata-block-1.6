let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let page = document.querySelector('.page');

let formCall = document.querySelector('[name="form-call"]');
let formMessage = document.querySelector('[name="form-message"]');

function clickForm(event) {

    let buttonClose = document.querySelectorAll('.form__button-close');

    if ( event.target.closest('button') == buttonClose[0] || event.target.closest('button') == buttonClose[1] ) {

        formCall.classList.remove('form--visible');
        formMessage.classList.remove('form--visible');
        header.classList.remove('header--state-blur-form');
        main.classList.remove('main--state-blur-form');
        aside.classList.remove('aside--state-blur');
        page.classList.remove('page--state-blur-form');
    }
}

formCall.addEventListener('click', clickForm);
formMessage.addEventListener('click', clickForm);