import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay } from 'swiper/modules';
import { rem } from "../utils/constants";
import initForms from "../utils/forms";
import initSelect from "../utils/select";
import initCatalogFilterOpener from '../components/catalog'
import initCardPage from "../components/cardView";
import initFeedBack from "../components/feedback";
import initUserPage from "../components/userPage";
import initSignUp from "../components/signUp";
import { Toggler } from "../utils/toggler";





$(function () {
    dropDowns()
    initForms()
    initSwipers()
    choiceSystemSwiper()
    initSelect()
    initMobileNav()
    initCatalogFilterOpener()
    initCardPage()
    initFeedBack()
    initUserPage()
    initSignUp()
    modalsHandler()
    new Toggler('.toggler-input-feedback', '.toggler-target-feedback', '_opened')
    initNewsSwiper()

});

function dropDowns() {
    const ddBtn = $('.drop-down-target')
    if (!ddBtn) return

    const ddParent = '.drop-down-container',
        ddOpened = '_opened'


    ddBtn.on('click', (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle(ddOpened)
        e.currentTarget.closest(ddParent)
            .classList.toggle(ddOpened)
    })

}

function initSwipers() {

    const complects = document.querySelector('.complects__c-slider')
    if (complects) {
        new Swiper(complects, {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            breakpoints: {
                768: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,

                }
            },
            pagination: {
                el: '.complects__c-slider-pagination'
            },
            navigation: {
                prevEl: '.complects__c-slider-prev',
                nextEl: '.complects__c-slider-next'
            },

        })
    }

    const whyChoice = document.querySelector('.why-choice__c-slider')
    if (whyChoice) {
        new Swiper(whyChoice, {
            modules: [Pagination, Grid],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            grid: {
                rows: 1
            },
            breakpoints: {
                768: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2,
                        fill: 'row'

                    },

                }
            },
            pagination: {
                el: '.why-choice__c-slider-pagination'
            },

        })
    }

    const categories = document.querySelector('.ctagories__c-slider')
    if (categories) {
        new Swiper(categories, {
            modules: [Pagination, Grid],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            grid: {
                rows: 1
            },

            breakpoints: {
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2,
                        fill: 'row'

                    },

                }
            },
            pagination: {
                el: '.ctagories__c-slide-pagination'
            },

        })
    }
    const spceialOffer = document.querySelector('.special-offer__c-slider')
    if (spceialOffer) {
        new Swiper(spceialOffer, {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            breakpoints: {
                768: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,

                }
            },
            pagination: {
                el: '.special-offer__c-slider-pagination'
            },
            navigation: {
                prevEl: '.special-offer__c-slider-prev',
                nextEl: '.special-offer__c-slider-next'
            },

        })
    }
    const heading = document.querySelector('.main-heading__c-main-slider')
    if (heading) {
        new Swiper(heading, {
            modules: [Pagination, Autoplay],
            loop: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            grabCursor: false,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.header-pagination'
            },


        })
    }
    const defenseWork = document.querySelector('.defense-work__c-slider')
    if (defenseWork) {
        new Swiper(defenseWork, {
            modules: [Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,

                }
            },
            pagination: {
                el: '.defense-work-pagination'
            }


        })
    }

    const catalogHead = document.querySelector('.catalog-head-swiper')
    if (catalogHead) {
        new Swiper(catalogHead, {
            modules: [Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,

                }
            },
            pagination: {
                el: '.catalog-head-pagination'
            }


        })
    }

    const catalogDefense = document.querySelector('.catalog-defense__c-right')
    if (catalogDefense) {
        new Swiper(catalogDefense, {
            modules: [Pagination, Grid],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            grid: {
                rows: 1
            },

            breakpoints: {
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2,
                        fill: 'row'

                    },

                }
            },
            pagination: {
                el: '.catalog-defense-pagination'
            },

        })
    }

    const categoryFs = document.querySelectorAll('.category-fs-slider')
    if (categoryFs) {
        categoryFs.forEach((el) => {
            new Swiper(el, {
                modules: [Pagination],
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: rem(3),
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,

                    }
                },
                pagination: {
                    el: el.closest('.category-fs').querySelector('.category-fs-pagination')
                }


            })
        })

    }



}
function choiceSystemSwiper() {
    const choiceSystem = document.querySelector('.choice-system__c-left-slider')
    if (!choiceSystem) return
    const swiper = new Swiper(choiceSystem, {
        modules: [Pagination],
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        allowTouchMove: false,
        preventInteractionOnTransition: true,
        touchMoveStopPropagation: true,
        pagination: {
            el: '.choice-system__c-left-top-pagination',
            type: 'fraction'
        }

    })

    choiceSystem.querySelectorAll('.choice-system__c-left-slider-form-e-next')
        .forEach((el) => {
            el.addEventListener('click', () => {
                swiper.slideNext()
            })
        })

}
function initMobileNav() {
    const target = document.querySelector('.mobile-nav')
    if (!target) return

    let scrollStart = 0
    document.addEventListener('scroll', () => {
        if (window.scrollY > scrollStart + 50) {
            target.classList.add('_opened')
            scrollStart = window.scrollY
        } else if (window.scrollY < scrollStart - 50) {
            target.classList.remove('_opened')
            scrollStart = window.scrollY

        }
    })

}
function initNewsSwiper() {
    const sliders = document.querySelectorAll('.news-detail-slider')
    if (!sliders) return
    sliders.forEach((e) => {
     
        new Swiper(e.querySelector('.swiper'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            breakpoints: {
                768: {
                    slidesPerView: 3,

                }
            },
            navigation: {
                prevEl: e.querySelector('.btn-swiper_left'),
                nextEl: e.querySelector('.btn-swiper_right'),
            },
            pagination: {
                el: e.querySelector('.slider-pagination')
            }
        })

    })
}



function modalsHandler() {


    const modalOpeners = $('.modal-opener'),
        modalClosers = $('.modal-closer'),
        html = $('html')


    if (!modalOpeners || !modalClosers) return

    modalOpeners.on('click', (ev) => {
        const { modal } = ev.currentTarget.dataset

        $(`.modal-${modal}`)
            .fadeIn()
            .addClass('_opened')
        html.addClass('lock')
    })


    modalClosers.on('click', (ev) => {
        const { classList } = ev.target
        if (!classList.contains('modal-closer')) return

        if (classList.contains('modal')) {
            $(ev.target).fadeOut().removeClass('_opened')

        } else {
            $(ev.target.closest('.modal')).fadeOut().removeClass('_opened')

        }
        html.removeClass('lock')
    })
}




/* function formSubmit(inputsData) {
    console.log(inputsData);
    $('.modal-send-call').fadeOut().removeClass('_opened')
    $('.modal-success').fadeIn().addClass('_opened')
} */



