import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../brands/brands.scss';

//Инициализируем слайдер

const swiper = new Swiper('.brands__slider', {
  
    modules: [Pagination],

    pagination: {                 // Включаем пагинацию
      el: '.swiper-pagination',
    },
  
    spaceBetween: 60,             //Задаем гэп между слайдами
    slidesPerView: 1.2,           //Показываем часть следующего слайда
    centeredSlides: false,        //Текущий слайд не центрируем

  });

//Делаем обработку кнопки "Показать всё"

let buttonShow = document.querySelector('.brands__button-show');
let brandsMenu = document.querySelector('.brands__menu');

const countCards_768 = 6;      //Число карточек на экране 768
const countCards_1119 = 8;     //Число карточек на экране 1119

function brandsShowHide() {

  if ( buttonShow.textContent == 'Показать всё' ) {     //Если кнопка в состоянии "Показать все"
    
    buttonShow.textContent = 'Скрыть';
    buttonShow.classList.toggle('brands__button-show--state-button-hide');

    for (let i = 0; i < brandsMenu.children.length; i++) {
      brandsMenu.children[i].classList.remove('brands__card--state-768');
      brandsMenu.children[i].classList.remove('brands__card--state-1119');
    }

    brandsMenu.classList.add('brands__menu--state-big');
    
    return;
  } 
  
  if ( buttonShow.textContent == 'Скрыть' ) {       //Если кнопка в состоянии "Скрыть" if ( buttonShow.textContent == 'Скрыть всё' ) 
    
    buttonShow.textContent = 'Показать всё';
    buttonShow.classList.toggle('brands__button-show--state-button-hide');

    brandsMenu.classList.remove('brands__menu--state-big');
      
    for (let i = countCards_768; i < countCards_1119; i++) {
      brandsMenu.children[i].classList.add('brands__card--state-768');
    }

    for (let i = countCards_1119; i < brandsMenu.children.length; i++) {
      brandsMenu.children[i].classList.add('brands__card--state-1119');
    }
   
  }
}

buttonShow.addEventListener('click', brandsShowHide);