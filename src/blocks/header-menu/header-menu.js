
let headerMenu = document.querySelector('.header-menu');
let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');


function clickHeaderMenu (event) {

    switch(event.target.closest('li')) {

      case headerMenu.children[0]: 

        event.preventDefault();
        aside.classList.add('aside--mobile-menu');
        header.classList.add('header--state-blur');
        main.classList.add('main--state-blur');
        break;
      
      default:
        break;
    }
}

headerMenu.addEventListener('click', clickHeaderMenu);