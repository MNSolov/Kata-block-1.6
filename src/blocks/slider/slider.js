import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Инициализируем слайдер

const swiper = new Swiper('.slider', {
  
    modules: [Pagination],

    pagination: {                 // Включаем пагинацию
      el: '.swiper-pagination',
    },
  
    spaceBetween: 60,             //Задаем гэп между слайдами
    slidesPerView: 1.2,           //Показываем часть следующего слайда
    centeredSlides: false,        //Текущий слайд не центрируем

  });