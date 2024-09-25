import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { rem } from "../utils/constants";



export default function initFeedBack() {
    reviewOpener()
    swiper()

}
function swiper() {
    const swiper = document.querySelector('.feedback__c-slider')
    if (!swiper) return
    new Swiper(swiper, {
        modules: [Navigation, Pagination],
        loop: false,
        allowSlidePrev: 1,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesPerGroup: 1,

            }
        },
        navigation: {
            prevEl: '.feedback__c-slider-prev',
            nextEl: '.feedback__c-slider-next'
        },
        pagination: {
            el: '.feedback-pagination'
        }
    })

}
function reviewOpener() {

    if (!document.querySelector('.feedback__c-slider-e-body')) return


    const container = $('.feedback__c-slider'),
        textContainerSelector = '.feedback__c-slider-e-body',
        textSelector = '.feedback__c-slider-e-body-txt',
        shortenedTextSelecor = '_closed',
        maxHeight = 150

    document.querySelectorAll(textSelector).forEach((e) => {
        if (e.offsetHeight > maxHeight) {
            e = $(e)
            e.addClass(shortenedTextSelecor)
            console.log(e.closest(textContainerSelector));
            e.closest(textContainerSelector)
                .append('<button class="feedback__c-slider-e-body-opener btn-nav btn-nav_ul txt18">Развернуть</button>')
        }

    })

    container.on('click', (ev) => {
        if (!ev.target.classList.contains('feedback__c-slider-e-body-opener')) return

        const parent = ev.target.closest(textContainerSelector)

        if (!ev.target.closest(textContainerSelector).classList.contains('_opened')) {
            parent.classList.add('_opened')
            parent.querySelector(textSelector)
                .classList.remove(shortenedTextSelecor)
            ev.target.textContent = 'свернуть'


        } else {
            parent.classList.remove('_opened')
            parent.querySelector(textSelector)
                .classList.add(shortenedTextSelecor)
            ev.target.textContent = 'развернуть'
        }



    })

}
