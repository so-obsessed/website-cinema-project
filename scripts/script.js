'use strict'

// Выпадающее меню
const menu = document.querySelector('.menu'),
      menuList = menu.querySelector('.menu__list'),
      menuButton = menu.querySelector('.menu__button'),
      menuIcon = menu.querySelector('.menu-icon'),
      settingsButton = document.querySelector('.settings__extended-button');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_active');
    menuIcon.classList.toggle('fa-rotate-180');
})

// Модальное окно авторизации
function showModalWindow() {
    modal.classList.remove('inactive');
}
function removeModalWindow() {
    modal.classList.add('inactive');
}

const modal = document.querySelector('.modal'),
      modalWindow = modal.querySelector('.modal__window'),
      modalCloseButton = modal.querySelector('.modal__close-button');

modalCloseButton.addEventListener('click', removeModalWindow);

modal.addEventListener('click', e => {
    if (e.target != modalWindow)
        removeModalWindow();
})

// Слайдер рекомендаций (Без анимации)
let //position = 0,
    minActiveI = 0;
const sliderItems = document.querySelectorAll('.slider__item'),
      slider = document.querySelector('.slider'),
      sliderButtonLeft = document.querySelector('.slider__button-left'),
      sliderButtonRight = document.querySelector('.slider__button-right'),
      itemWidth = 374,
      countOfItems = sliderItems.length,
      countOfItemsInSlider = 6;

sliderButtonLeft.addEventListener('click', () => {
    //if (position != 0)
    if (minActiveI > 0)
    {
        //position -= 0;
        sliderItems[minActiveI - 1].classList.add('slider__item_active');
        sliderItems[minActiveI + countOfItemsInSlider -1].classList.remove('slider__item_active');
        minActiveI--;
    }

    //slider.style.transform = `translateX(${position}px)`;
})

sliderButtonRight.addEventListener('click', () => {
    //if (position != -1 * itemWidth * (countOfItems - countOfItemsInSlider))
    if (minActiveI < countOfItems - countOfItemsInSlider)
    {
        //position -= 0;
        sliderItems[minActiveI].classList.remove('slider__item_active');
        sliderItems[minActiveI + countOfItemsInSlider].classList.add('slider__item_active');
        minActiveI++;
    }
    //slider.style.transform = `translateX(${position}px)`;
})

//Выпадающее меню профиля
const profile = document.querySelector('.header__profile'),
      profileArrow = document.querySelector('.header__profile__arrow'),
      profileMenu = document.querySelector('.header__profile__menu');

profile.addEventListener('click', () => {
    profileArrow.classList.toggle('fa-rotate-180');
    profileMenu.classList.toggle('header__profile__menu_active');
})