
export default function initSignUp() {
    if (!document.querySelector('.sign-up')) return


    const btns = document.querySelectorAll('.sign-form-switcher'),
        slider = document.querySelector('.sign-up__c-slider')

    btns.forEach((e) => {
        e.addEventListener('change', (e) => {
           slider.style.transform = `translate(calc(-${e.target.dataset.slideto}00% - ${50 * e.target.dataset.slideto}px), 0)`
        })
    })
}