import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__list, .header__link, body').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.features__item').hover(function(event) {
        $('.features__item').toggleClass('opacity');
    })
})

$(document).ready(function() {
    $('.light__mode').click(function(event) {
        $('.mode, .light__mode, .dark__mode, .mode__img, .__white, .light__mode').addClass('light');
    })
})
$(document).ready(function() {
    $('.dark__mode').click(function(event) {
        $('.mode, .light__mode, .dark__mode, .mode__img, .__white').removeClass('light');
    })
})

$(document).ready(function() {
    $('.pricing__column').hover(function(event) {
        $('.pricing__column').toggleClass('opacity');
    })
})