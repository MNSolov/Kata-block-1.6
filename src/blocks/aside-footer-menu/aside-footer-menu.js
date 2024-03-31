

let asideFooterMenu = document.querySelector('.aside-footer-menu');
let formCall = document.querySelector('[name="form-call"]');
let formMessage = document.querySelector('[name="form-message"]');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let aside = document.querySelector('.aside');
let page = document.querySelector('.page');

function asideMobileClose () {

    aside.classList.remove('aside--mobile-menu');
    header.classList.remove('header--state-blur-mobile');
    main.classList.remove('main--state-blur-mobile');
    page.classList.remove('page--state-blur-mobile');
}


function clickAsideFooterMenu (event) {

    switch(event.target.closest('li')) {

    case asideFooterMenu.children[0]: 

        event.preventDefault();
        formCall.classList.add('form--visible');
        header.classList.add('header--state-blur-form');
        main.classList.add('main--state-blur-form');
        aside.classList.add('aside--state-blur');
        page.classList.add('page--state-blur-form');

        asideMobileClose();
        break;

    case asideFooterMenu.children[1]: 

        event.preventDefault();
        formMessage.classList.add('form--visible');
        header.classList.add('header--state-blur-form');
        main.classList.add('main--state-blur-form');
        aside.classList.add('aside--state-blur');
        page.classList.add('page--state-blur-form');

        asideMobileClose();
        break;
      
      default:
        break;
    }
}

asideFooterMenu.addEventListener('click', clickAsideFooterMenu);