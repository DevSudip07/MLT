// import {designsCard} from './compo/designs.js'


// ========== MOBILE NAV ICON ==========
'use strict';

var icon = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

var check = 0;
icon.addEventListener('click', function () {
    this.classList.toggle('activate');
    menu.style.right = '0';
    icon.style.left = '15%';
    check = 1;
});


icon.addEventListener('click', () => {
    if(check == 1) {
        icon.addEventListener('click', ()=> {
            menu.style.right = '-400px'
            icon.style.right = '15%';
            check = 0
        })
    }
});






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});