

let buttonShow = document.querySelector('.repair__button-show');
let img = buttonShow.firstElementChild;
let brandsMenu = document.querySelector('.repair__menu');

const countCards_768 = 3;      //Число карточек на экране 768
const countCards_1119 = 8;     //Число карточек на экране 1119

function repairShowHide() {
  if ( buttonShow.textContent == 'Показать всё' ) {     //Если кнопка в состоянии "Показать все"
    
    img.src = 'expand-reverse.svg';

    buttonShow.textContent = 'Скрыть';
    buttonShow.prepend(img);

    for (let i = 0; i < brandsMenu.children.length; i++) {
      brandsMenu.children[i].classList.remove('repair__card--state-768');
      brandsMenu.children[i].classList.remove('repair__card--state-1119');
    }

    brandsMenu.classList.add('repair__menu--state-big');
    
    return;
  } 
  
  if ( buttonShow.textContent == 'Скрыть' ) {       //Если кнопка в состоянии "Скрыть" if ( buttonShow.textContent == 'Скрыть всё' ) 
    
    img.src = 'expand.svg';

    buttonShow.textContent = 'Показать всё';
    buttonShow.prepend(img);

    brandsMenu.classList.remove('repair__menu--state-big');
      
    for (let i = countCards_768; i < countCards_1119; i++) {
      brandsMenu.children[i].classList.add('repair__card--state-768');
    }

    for (let i = countCards_1119; i < brandsMenu.children.length; i++) {
      brandsMenu.children[i].classList.add('repair__card--state-1119');
    }
   
  }
}


buttonShow.addEventListener('click', repairShowHide);