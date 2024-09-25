import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { rem } from "../utils/constants";




export default function initCardPage() {
    initCatalogImgSwiper()
    descriptionSlider()
}


function initCatalogImgSwiper() {

    const topSlider = document.querySelector('.card-page-top__c-img-top'),
        bottomSlider = document.querySelector('.card-page-top__c-img-bottom')

    if (!topSlider || !bottomSlider) return


    const topSwiper = new Swiper(topSlider, {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        allowTouchMove: false,
        preventInteractionOnTransition: true,
        touchMoveStopPropagation: true,
    })

    const bottomSwiper = new Swiper(bottomSlider, {
        modules: [Navigation, Pagination],
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: rem(1),
        breakpoints: {
            768: {
                slidesPerView: 4,
                slidesPerGroup: 1,

            }
        },
        pagination: {
            el: '.card-page-top__c-img-bottom-pagination'
        },
        navigation: {
            prevEl: '.card-page-top__c-img-bottom-prev',
            nextEl: '.card-page-top__c-img-bottom-next'
        },

    })
    bottomSlider.querySelectorAll('.card-page-top__c-img-bottom-slide')
        .forEach((e, i) => {
            e.addEventListener('click', () => {
                topSwiper.slideTo(i)
            })
        })

}

function descriptionSlider() {
    const target = document.querySelector('.card-page-description__c-slider')
    const btns = document.querySelectorAll('.card-page-description__c-nav-btn')
    if (!target || !btns) return

    const swiper = new Swiper(target, {
        loop: false,
        slidesPerView: 1,
        spaceBetween: rem(3),
        allowTouchMove: false,
        preventInteractionOnTransition: true,
        touchMoveStopPropagation: true,
    })
    btns.forEach((e, i) => {
        e.addEventListener('click', (btn) => {
            swiper.slideTo(i)
            btns.forEach((toggler)=> toggler.classList.remove('_opened'))
            btn.target.classList.add('_opened')
        })
    })



}