
let asideHeaderMenu = document.querySelector('.aside-header-menu');
let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let page = document.querySelector('.page');

function clickAsideHeaderMenu(event) {

    switch(event.target.closest('li')) {

        case asideHeaderMenu.children[0]:              //кнопка Close первая в списке поэтому обращаемся к ней через children[0]
  
          aside.classList.remove('aside--mobile-menu');
          header.classList.remove('header--state-blur-mobile');
          main.classList.remove('main--state-blur-mobile');
          page.classList.remove('page--state-blur-mobile');
          break;
        
        default:
          break;
      }
}

asideHeaderMenu.addEventListener('click', clickAsideHeaderMenu);