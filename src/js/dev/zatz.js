import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { rem } from "../utils/constants";
import initForms from "../utils/forms";




$(function () {
    dropDowns()
    initForms()

    /*   const forms = document.querySelectorAll('.form')
      if (forms) {
          forms.forEach((e) => {
              new Form(e, formSubmit)
              new Inputmask('+7 (999) 999-99-99')
                  .mask($(e).find('.form-input-txt-el[name="phone"]'));
  
          })
      } */


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




/*
function feedBackOpenReview() {
    if (!document.querySelector('.feedback__slider-list-e-body-c-txt')) return

    const container = $('.feedback-container'),
        textSelector = '.feedback__slider-list-e-body-c-txt',
        text = $(textSelector).toArray(),
        textContainerSelector = '.feedback__slider-list-e-body-c',
        shortenedTextSelecor = 'feedback__slider-list-e-body-c-txt_closed'

    const maxHeight = 150
    text.forEach((e) => {
        if (e.offsetHeight > maxHeight) {
            e = $(e)
            e.addClass(shortenedTextSelecor)
            e.closest(textContainerSelector)
                .append('<button class="feedback__slider-list-e-body-c-more txt18 "> еще</button>')
        }

    })

    container.on('click', (ev) => {
        if (!ev.target.classList.contains('feedback__slider-list-e-body-c-more')) return

        if (!ev.target.closest(textContainerSelector).classList.contains('_opened')) {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.add('_opened')
            parent.querySelector(textSelector)
                .classList.remove(shortenedTextSelecor)
            ev.target.textContent = 'скрыть'


        } else {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.remove('_opened')
            parent.querySelector(textSelector)
                .classList.add(shortenedTextSelecor)
            ev.target.textContent = 'еще'
        }



    })



}
 */

/*  function modalsOpenHandler() {

    const modalOpeners = $('.modal-opener')
    const modalClosers = $('.modal-closer')

    if (!modalOpeners || !modalClosers) return

    modalOpeners.on('click', (ev) => {
        const { modal } = ev.currentTarget.dataset

        $(`.modal-${modal}`)
            .fadeIn()
            .addClass('_opened')

    })


    modalClosers.on('click', (ev) => {
        const { classList } = ev.target
        if (!classList.contains('modal-closer')) return

        if (classList.contains('modal')) {
            $(ev.target).fadeOut().removeClass('_opened')

        } else {
            $(ev.target.closest('.modal')).fadeOut().removeClass('_opened')

        }
    })
}  */

/* function formSubmit(inputsData) {
    console.log(inputsData);
    $('.modal-send-call').fadeOut().removeClass('_opened')
    $('.modal-success').fadeIn().addClass('_opened')
} */



