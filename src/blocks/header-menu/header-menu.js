
let headerMenu = document.querySelector('.header-menu');
let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let formCall = document.querySelector('[name="form-call"]');
let formMessage = document.querySelector('[name="form-message"]');
let page = document.querySelector('.page');


function clickHeaderMenu (event) {

  if ( header.classList.contains('header--state-blur-mobile') ||
       header.classList.contains('header--state-blur-form')) 
       return;

    switch(event.target.closest('li')) {

      case headerMenu.children[0]: 

        event.preventDefault();
        aside.classList.add('aside--mobile-menu');
        header.classList.add('header--state-blur-mobile');
        main.classList.add('main--state-blur-mobile');
        page.classList.add('page--state-blur-mobile');
        break;

      case headerMenu.children[3]: 

        event.preventDefault();
        formCall.classList.add('form--visible');
        header.classList.add('header--state-blur-form');
        main.classList.add('main--state-blur-form');
        aside.classList.add('aside--state-blur');
        page.classList.add('page--state-blur-form');

        break;

      case headerMenu.children[4]: 

        event.preventDefault();
        formMessage.classList.add('form--visible');
        header.classList.add('header--state-blur-form');
        main.classList.add('main--state-blur-form');
        aside.classList.add('aside--state-blur');
        page.classList.add('page--state-blur-form');

        break;
      
      default:
        break;
    }
}

headerMenu.addEventListener('click', clickHeaderMenu);