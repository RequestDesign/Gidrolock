import $ from 'jquery'
import Form from "./Form";
import Inputmask from "inputmask";

const ru = new Inputmask('+7 (999) 999-99-99', { placeholder: '' }),
    br = new Inputmask('+375 (999) 999-99-99', { placeholder: '' }),
    kz = new Inputmask('+7 (999) 999-99-99', { placeholder: '' }),
    phoneMap = {
        ru, br, kz
    }

export default function initForms() {
    const forms = document.querySelectorAll('.form')
    if (forms) {
        forms.forEach((e) => {
            new Form(e, formSubmit)
            ru.mask($(e).find('input[name="phone"]'));
            changeInputMask(e)
        })
    }
}

function formSubmit(inputData) {
    console.log(inputData);
}
function changeInputMask(form) {

    $(form).find('.input-phone__select-list-btn').on('click', (e) => {
        e.preventDefault()
        const { mask } = e.target.dataset,
            parent = $(e.target.closest('.input-phone')),
            imageLink = e.target.children[0].getAttribute('src')
        /**
            * 1. менает изображение 
            * 2. применяет маску из хэша
            * 3. закрывается
            */
        $('.input-phone__select-current-flag').attr('src', imageLink)
        phoneMap[mask].mask(parent.find('input[name="phone"]'))
        parent.find('.drop-down-target').trigger('click')
    })

}