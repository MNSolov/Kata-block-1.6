

let buttonShow = document.querySelector('.repair__button-show');
let img = buttonShow.firstElementChild;
let repairMenu = document.querySelector('.repair__menu');

const countRepairCards_768 = 3;      //Число карточек на экране 768
const countRepairCards_1119 = 4;     //Число карточек на экране 1119

function repairShowHide() {
  if ( buttonShow.textContent == 'Показать всё' ) {     //Если кнопка в состоянии "Показать все"
    
    img.src = 'expand-reverse.svg';

    buttonShow.textContent = 'Скрыть';
    buttonShow.prepend(img);

    for (let i = 0; i < repairMenu.children.length; i++) {
      repairMenu.children[i].classList.remove('repair__card--state-768');
      repairMenu.children[i].classList.remove('repair__card--state-1119');
    }

    repairMenu.classList.add('repair__menu--state-big');
    
    return;
  } 
  
  if ( buttonShow.textContent == 'Скрыть' ) {       //Если кнопка в состоянии "Скрыть" if ( buttonShow.textContent == 'Скрыть всё' ) 
    
    img.src = 'expand.svg';

    buttonShow.textContent = 'Показать всё';
    buttonShow.prepend(img);

    repairMenu.classList.remove('repair__menu--state-big');
      
    for (let i = countRepairCards_768; i < countRepairCards_1119; i++) {
      repairMenu.children[i].classList.add('repair__card--state-768');
    }

    for (let i = countRepairCards_1119; i < repairMenu.children.length; i++) {
      repairMenu.children[i].classList.add('repair__card--state-1119');
    }
   
  }
}


buttonShow.addEventListener('click', repairShowHide);