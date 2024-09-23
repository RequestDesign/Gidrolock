import $ from 'jquery'
import Form from "./Form";
import Inputmask from "inputmask";

const ru = new Inputmask('+7 (999) 999-99-99'),
    br = new Inputmask('+375 (999) 999-99-99'),
    kz = new Inputmask('+7 (999) 999-99-99'),
    phoneMap = {
        ru, br, kz
    }

export default function initForms() {
    const forms = document.querySelectorAll('.form')
    if (forms) {
        forms.forEach((e) => {
            new Form(e, formSubmit)
            ru.mask($(e).find('input[name="phone"]'));
            changeInputMask()
        })
    }
}

function formSubmit(inputData) {
    console.log(inputData);
}
function changeInputMask() {
    $('.input-phone__select-list-btn').on('click', (e) => {
        /**
         * 1. менает изображение 
         * 2. применяет маску из хэша
         * 3. закрывается
         */
        const { mask } = e.target.dataset,
            parent = $(e.target.closest('.input-phone')),
            imageLink = e.target.children[0].getAttribute('src')

        $('.input-phone__select-current-flag').attr('src', imageLink)
        phoneMap[mask].mask(parent.find('input[name="phone"]'))
        parent.find('.drop-down-target').trigger('click')
    })

}