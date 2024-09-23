import Form from "./Form";
import Inputmask from "inputmask";


export default function initForms() {
    const forms = document.querySelectorAll('.form')
    if (forms) {
        forms.forEach((e) => {
            new Form(e, formSubmit)
            new Inputmask('+7 (999) 999-99-99')
                .mask($(e).find('.form-input-txt-el[name="phone"]'));

        })
    }
}