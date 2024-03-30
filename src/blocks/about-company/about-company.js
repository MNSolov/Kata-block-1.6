//Делаем обработку кнопки "Показать всё"


let buttonShow = document.querySelector('.about-company__button-show');
let img = buttonShow.firstElementChild;
let textAboutCompany = document.querySelector('.about-company__text');

function textShowHide() {
  if ( buttonShow.textContent == 'Читать далее' ) {     //Если кнопка в состоянии "Читать далее"
    
    img.src = 'expand-reverse.svg';

    buttonShow.textContent = 'Скрыть';
    buttonShow.prepend(img);

    for (let i = 0; i < textAboutCompany.children.length; i++) {
        textAboutCompany.children[i].classList.remove('about-company__paragraph--state-tablet');
        textAboutCompany.children[i].classList.remove('about-company__paragraph--state-desctop');
        textAboutCompany.children[i].classList.remove('about-company__paragraph--state-invisible');
    }

    textAboutCompany.children[1].classList.add('about-company__paragraph--state-invisible');
    
    return;
  } 
  
  if ( buttonShow.textContent == 'Скрыть' ) {       //Если кнопка в состоянии "Скрыть" if ( buttonShow.textContent == 'Скрыть' ) 
    
    img.src = 'expand.svg';

    buttonShow.textContent = 'Читать далее';
    buttonShow.prepend(img);

    textAboutCompany.children[1].classList.remove('about-company__paragraph--state-invisible');
    textAboutCompany.children[1].classList.add('about-company__paragraph--state-tablet');
    textAboutCompany.children[2].classList.add('about-company__paragraph--state-desctop');
    textAboutCompany.children[3].classList.add('about-company__paragraph--state-invisible');
  }
}

buttonShow.addEventListener('click', textShowHide);