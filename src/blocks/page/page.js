let aside = document.querySelector('.aside');
let header = document.querySelector('.header');
let main = document.querySelector('.main');

let formCall = document.querySelector('[name="form-call"]');
let formMessage = document.querySelector('[name="form-message"]');
let page = document.querySelector('.page');

function asideMobileClose () {

    aside.classList.remove('aside--mobile-menu');
    header.classList.remove('header--state-blur-mobile');
    main.classList.remove('main--state-blur-mobile');
    page.classList.remove('page--state-blur-mobile');
}

function clickPage (event) {


    if ( aside.classList.contains('aside--mobile-menu') &&  //Проверяем, что открыто мобильное меню
         !event.target.closest('aside') && 
         !event.target.closest('form') &&                   //Проверяем, что клик не попал по области меню и открытой форме
         !event.defaultPrevented ) {                        //Проверяем не было ли перед этим клика по кнопке вызова этого меню,
                                                            //там будет отмена действия по умолчанию

        asideMobileClose ()
    }

    if ( formCall.classList.contains('form--visible') &&  //Проверяем, что открыта форма звонка
         !event.target.closest('form') &&                  //Проверяем, что клик не попал по области меню
         !event.defaultPrevented ) {                        //Проверяем не было ли перед этим клика по кнопке вызова этого меню,
                                                            //там будет отмена действия по умолчанию

        formCall.classList.remove('form--visible');
        header.classList.remove('header--state-blur-form');
        main.classList.remove('main--state-blur-form');
        aside.classList.remove('aside--state-blur');
        page.classList.remove('page--state-blur-form');
    }

    if ( formMessage.classList.contains('form--visible') &&  //Проверяем, что открыта форма звонка
         !event.target.closest('form') &&                  //Проверяем, что клик не попал по области меню
         !event.defaultPrevented ) {                        //Проверяем не было ли перед этим клика по кнопке вызова этого меню,
                                                            //там будет отмена действия по умолчанию

        formMessage.classList.remove('form--visible');
        header.classList.remove('header--state-blur-form');
        main.classList.remove('main--state-blur-form');
        aside.classList.remove('aside--state-blur');
        page.classList.remove('page--state-blur-form');
    }
}

page.addEventListener('click', clickPage);