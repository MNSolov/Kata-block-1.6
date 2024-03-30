let page = document.querySelector('.page');
let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');

function clickPage (event) {

    if ( aside.classList.contains('aside--mobile-menu') &&  //Проверяем, что открыто мобильное меню
         !event.target.closest('aside') &&                  //Проверяем, что клик не попал по области меню
         !event.defaultPrevented ) {                        //Проверяем не было ли перед этим клика по кнопке вызова этого меню,
                                                            //там будет отмена действия по умолчанию

        aside.classList.remove('aside--mobile-menu');
        header.classList.remove('header--state-blur');
        main.classList.remove('main--state-blur');
    }
}

page.addEventListener('click', clickPage);