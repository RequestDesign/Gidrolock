import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay } from 'swiper/modules';
import { rem } from "../utils/constants";
import initForms from "../utils/forms";
import initSelect from "../utils/select";
import initCatalogFilterOpener from '../components/catalog'
import initCardPage from "../components/cardView";
import initFeedBack from "../components/feedback";
import initSignUp from "../components/signUp";
import initSelection from "../components/selection";


import { Switcher } from "../utils/Switcher";

/*  */



$(function () {
    dropDowns()
    initForms()
    initSwipers()

    initSelect()
    initMobileNav()
    initCatalogFilterOpener()
    initCardPage()
    initFeedBack()
    initSignUp()
    modalsHandler()

    initSwichers()
    initSelection()
    modalMobileCode()
    initShowHelp()

});

function dropDowns() {

    $(document).on('click', (e) => {
        if (e.target.classList.contains('drop-down-target')) {
            e.preventDefault()
            e.target.classList.toggle('_opened')
            e.target.closest('.drop-down-container')
                .classList.toggle('_opened')
        }


    })

}

function initSwipers() {

    const complects = document.querySelectorAll('.complects__c-slider')
    if (complects) {
        complects.forEach((e) => {
            new Swiper(e, {
                modules: [Navigation, Pagination],
                loop: false,
                slidesPerView: 1.2,
                centeredSlides: true,
                slidesPerGroup: 1,
                spaceBetween: rem(3),
                breakpoints: {
                    768: {
                        slidesPerView: 5,
                        slidesPerGroup: 1,
                        centeredSlides: false

                    }
                },
                pagination: {
                    el: e.querySelector('.complects__c-slider-pagination')
                },
                navigation: {
                    prevEl: e.querySelector('.complects__c-slider-prev'),
                    nextEl: e.querySelector('.complects__c-slider-next')
                },

            })
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
                    slidesPerView: 'auto',
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
                el: '.header-pagination',
                clickable: true
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
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: rem(3),
            centeredSlides: true,
            simulateTouch: false,
            breakpoints: {
                768: {
                    centeredSlides: false,
                    slidesPerView: 3,
                    slidesPerGroup: 1,

                }
            },
           /*  pagination: {
                el: '.catalog-head-pagination'
            } */


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

    const choiceSystem = document.querySelector('.choice-system__c-left-slider')
    if (choiceSystem) {
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

    const newsDeatail = document.querySelectorAll('.news-detail-slider')
    if (newsDeatail) {
        newsDeatail.forEach((e) => {

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

function modalMobileCode() {
    const container = $('.input-4x-code')
    if (!container) return

    const inputs = container.find('input[name="code"]'),
        errMsg = container.find('.input-text-error-msg'),
        valueInput = container.find('input[name="pincode"]')

    container.on('submit', (e) => {
        e.preventDefault()

    })

    inputs.on('keydown', (e) => {
        const val = e.key
        if (val == val.replace(/[0-9]/, '')) {
            $(e.currentTarget).val('');
            return false;
        }

        $(e.currentTarget).val('');
        let res = Array.from(valueInput.val())
        res[e.target.dataset.index] = val
        res = res.join('')
        valueInput.val(res)



    })

    inputs.on('keyup', (function (e) {
        let val = $(this).val();
        // Ввод только цифр
        if (val == val.replace(/[0-9]/, '')) {
            $(this).val('');
            return false;
        }
        // Передача фокуса следующему innput
        if (e.currentTarget.dataset.index < 3) {
            inputs.eq(inputs.index(this) + 1).focus();
        }

        if (valueInput.val() == valueInput.val().replace(/\*/g, '')) {
            container.trigger('submit')
        }


    }))
}

function initSwichers() {
    const basketDelivery = document.querySelector('.switcher-delivery')
    if (basketDelivery) {
        new Switcher(basketDelivery, 0)
    }
    const userdata = document.querySelector('.switcher-userdata')

    if (userdata) {
        new Switcher(userdata, 0)
    }

    const modalCdek = document.querySelector('.modal-cdek')
    if (modalCdek) {
        new Switcher(modalCdek, 0)
    }
    const supportList = document.querySelector('.support-list')
    if (supportList) {
        new Switcher(supportList, 0)
    }
    const userPage = document.querySelector('.user-page')
    if (userPage) {
        new Switcher(userPage, 0)
    }

    const modalSign = document.querySelector('.modal-sign-reset-switcher')
    if (modalSign) {
        new Switcher(modalSign, 0)
    }



}

function initShowHelp() {
    const targets = document.querySelectorAll('.show-help')

    targets.forEach((t) => {
        if (!$(t).find('.show-help-text')) return

        t.addEventListener('mouseover', (e) => {
            $(e.currentTarget).find('.show-help-text').fadeIn()
        })
        t.addEventListener('mouseleave', (e) => {
            $(e.currentTarget).find('.show-help-text').fadeOut()
        })
    })
}




